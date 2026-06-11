import { s as ssr_context, a as attr_style, b as stringify, c as ensure_array_like, d as attr_class, e as escape_html, f as derived$1, h as attr, i as store_get, u as unsubscribe_stores } from "../../chunks/root.js";
import { s as settings, i as insight, l as luke, a as insights } from "../../chunks/settings.js";
import { b as base } from "../../chunks/server.js";
import { e as derived, w as writable } from "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "clsx";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function parseYear(dateStr) {
  const range = parseDateRange(dateStr);
  return range?.start ?? null;
}
function parseDateRange(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  let working = dateStr.toLowerCase().replace(/[.\s]/g, "");
  const isBce = working.endsWith("bce");
  const isCe = working.endsWith("ce");
  if (!isBce && !isCe) {
    const yearWordMatch = working.match(/year\s*(\d+)/i);
    if (yearWordMatch) {
      const year = parseInt(yearWordMatch[1], 10);
      return { start: working.includes("bce") ? -year : year };
    }
    return null;
  }
  const suffix = isBce ? "bce" : "ce";
  const body = working.replace(new RegExp(`${suffix}$`), "");
  const parts = body.split("-").map((p) => p.replace(/^c+/, ""));
  const nums = parts.map((p) => parseInt(p, 10)).filter((n) => !isNaN(n));
  if (nums.length === 0) return null;
  if (nums.length === 1) {
    return { start: isBce ? -nums[0] : nums[0] };
  }
  const start = isBce ? -nums[0] : nums[0];
  const end = isBce ? -nums[nums.length - 1] : nums[nums.length - 1];
  return { start: Math.min(start, end), end: Math.max(start, end) };
}
function isWithinRange(dateStr, referenceYear, contextYears) {
  const range = parseDateRange(dateStr);
  if (!range) return false;
  const lo = referenceYear - contextYears;
  const hi = referenceYear + contextYears;
  if (range.end !== void 0) {
    return range.start <= hi && range.end >= lo;
  }
  return range.start >= lo && range.start <= hi;
}
const query = writable("");
const targetResult = writable(null);
function normalize(str) {
  return str.toLowerCase().trim();
}
function levenshtein(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, () => new Array(a.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[j][i] = matrix[j - 1][i - 1];
      } else {
        matrix[j][i] = Math.min(
          matrix[j - 1][i - 1] + 1,
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
function fuzzyScore(text, q) {
  text = normalize(text);
  q = normalize(q);
  if (text.includes(q)) return 0;
  return levenshtein(text, q);
}
const results = derived([query, settings], ([$query, $settings]) => {
  if (!$query.trim()) {
    return [];
  }
  const { yearsContext, dataset } = $settings;
  const data = dataset === "example" ? insight : dataset === "luke" ? luke : insights;
  const scored = data.map((item) => ({
    item,
    score: Math.min(
      fuzzyScore(item.title, $query),
      fuzzyScore(item.description, $query),
      item.tags ? fuzzyScore(item.tags.join(" "), $query) : Infinity
    )
  }));
  const topResult = scored.reduce(
    (best, curr) => curr.score < best.score ? curr : best,
    scored[0]
  );
  if (!topResult || topResult.score > Math.max(2, $query.length / 3)) {
    targetResult.set(null);
    return [];
  }
  targetResult.set(topResult.item);
  const referenceYear = parseYear(topResult.item.date);
  if (referenceYear === null) {
    targetResult.set(null);
    return [];
  }
  const filteredByDate = scored.filter((r) => isWithinRange(r.item.date, referenceYear, yearsContext)).sort((a, b) => a.score - b.score);
  return filteredByDate.map((r) => r.item);
});
function OrthoLinearGraph($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { results: results2 = [], target = null } = $$props;
    let focusedIndex = 0;
    let targetYear = derived$1(() => target ? parseDateRange(target.date)?.start ?? null : null);
    let datedItems = derived$1(() => results2.map((item, index) => {
      const range = parseDateRange(item.date);
      if (!range) return null;
      return {
        item,
        year: range.start,
        startYear: range.start,
        endYear: range.end,
        isRange: range.end !== void 0,
        index,
        gap: targetYear() !== null ? range.start - targetYear() : 0
      };
    }).filter((d) => d !== null).sort((a, b) => a.year - b.year));
    let minYear = derived$1(() => datedItems().length > 0 ? Math.min(...datedItems().map((d) => d.year)) : 0);
    let maxYear = derived$1(() => datedItems().length > 0 ? Math.max(...datedItems().map((d) => d.year)) : 100);
    let yearRange = derived$1(() => maxYear() - minYear() || 1);
    let containerW = derived$1(() => 800);
    let timelineWidth = derived$1(() => Math.max(datedItems().length * 220, containerW()));
    function getPosition(year) {
      const padding = 10;
      return padding + (year - minYear()) / yearRange() * (100 - padding * 2);
    }
    function formatYear(year) {
      if (year < 0) return `${Math.abs(year)}bce`;
      return `${year}ce`;
    }
    function fmtDate(item) {
      if (item.isRange) return `${formatYear(item.startYear)}–${formatYear(item.endYear)}`;
      return formatYear(item.year);
    }
    function getSide(index) {
      return index % 2 === 0 ? "top" : "bottom";
    }
    function goLeft() {
      if (focusedIndex > 0) focusedIndex--;
    }
    function goRight() {
      if (focusedIndex < datedItems().length - 1) focusedIndex++;
    }
    function onDocumentKeydown(e) {
      const active = document.activeElement;
      const isInput = active instanceof HTMLInputElement || active instanceof HTMLTextAreaElement;
      if (e.key === "Enter" && isInput) {
        e.preventDefault();
        return;
      }
      if (isInput) return;
      if (e.key === "ArrowLeft") {
        goLeft();
        e.preventDefault();
      } else if (e.key === "ArrowRight") {
        goRight();
        e.preventDefault();
      }
    }
    onDestroy(() => {
      document.removeEventListener("keydown", onDocumentKeydown);
    });
    if (datedItems().length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="graph-container svelte-a7d427" tabindex="-1"><div class="timeline svelte-a7d427"${attr_style(`width: ${stringify(timelineWidth())}px;`)}><!--[-->`);
      const each_array = ensure_array_like(datedItems());
      for (let sortIdx = 0, $$length = each_array.length; sortIdx < $$length; sortIdx++) {
        let { item, year, index, gap, isRange, endYear } = each_array[sortIdx];
        const side = getSide(sortIdx);
        $$renderer2.push(`<div${attr_class(`node ${stringify(side)}`, "svelte-a7d427", { "target": datedItems()[focusedIndex]?.item.id === item.id })}${attr_style(`left: ${stringify(getPosition(year))}%;`)} role="button" tabindex="-1"><div class="connector svelte-a7d427"></div> <div class="node-content svelte-a7d427"><strong class="svelte-a7d427">${escape_html(item.title)}</strong> `);
        if (gap !== 0) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<small${attr_class("gap svelte-a7d427", void 0, { "negative": gap < 0 })}>${escape_html(gap > 0 ? "+" : "")}${escape_html(gap)}yr</small>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="node-year svelte-a7d427">${escape_html(formatYear(year))}</div></div>`);
      }
      $$renderer2.push(`<!--]--> <div class="axis svelte-a7d427"></div></div></div> `);
      if (datedItems()[focusedIndex]) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="detail svelte-a7d427"><strong class="svelte-a7d427">${escape_html(datedItems()[focusedIndex].item.title)}</strong> <small class="detail-date svelte-a7d427">${escape_html(fmtDate(datedItems()[focusedIndex]))}</small> <p class="svelte-a7d427">${escape_html(datedItems()[focusedIndex].item.description)}</p></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p>No results with valid dates to display</p>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="header"><span class="title-inner"><h1 class="title" style="text-align: center; margin-bottom: 1.5rem; margin-top: 0rem;">Biblia<span class="accent">.ctx</span></h1> <svg class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.291 14.3262"><g><rect height="14.3262" opacity="0" width="18.291" x="0" y="0"></rect><path d="M4.33594 0C2.62695 0 0.878906 0.810547 0.0878906 2.1875C0 2.34375 0 2.45117 0 2.76367L0 13.6719C0 14.0625 0.253906 14.3066 0.683594 14.3066C0.878906 14.3066 1.07422 14.248 1.24023 14.1016C2.20703 13.291 3.45703 12.8613 4.69727 12.8613C5.83008 12.8613 6.94336 13.2227 7.79297 13.9551C7.88086 14.0332 7.98828 14.0723 8.07617 14.0723C8.25195 14.0723 8.39844 13.9355 8.39844 13.7305L8.39844 2.25586C8.39844 2.04102 8.38867 2.01172 8.22266 1.77734C7.50977 0.683594 6.00586 0 4.33594 0ZM13.5938 0C11.9238 0 10.4199 0.683594 9.70703 1.77734C9.54102 2.01172 9.53125 2.04102 9.53125 2.25586L9.53125 13.7305C9.53125 13.9355 9.67773 14.0723 9.85352 14.0723C9.94141 14.0723 10.0488 14.0332 10.1367 13.9551C10.9863 13.2227 12.0996 12.8613 13.2227 12.8613C14.4727 12.8613 15.7227 13.291 16.6895 14.1016C16.8555 14.248 17.0508 14.3066 17.2461 14.3066C17.6758 14.3066 17.9297 14.0625 17.9297 13.6719L17.9297 2.76367C17.9297 2.45117 17.9297 2.34375 17.8418 2.1875C17.0508 0.810547 15.3027 0 13.5938 0Z" fill="white" fill-opacity="0.85"></path></g></svg></span> <hr style="margin-top: 0rem; margin-bottom: 1rem; margin-left: 1rem; margin-right: 1rem; border: none; border-top: 1px solid var(--text-color);"/> <p style="padding-bottom: 1rem; text-align: center;">Quick anthropological context.</p> <a${attr("href", `${stringify(base)}/settings`)} class="settings-btn" aria-label="Open settings"><button class="btn" aria-label="Open settings"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 64 56"><path d="M52.339,28.023C53.299,28.188,54,29.02,54,29.994v4.012c0,0.974-0.701,1.806-1.661,1.971l-3.464,0.596	c-0.395,1.461-0.969,2.846-1.707,4.129l2.026,2.868c0.562,0.795,0.469,1.88-0.219,2.568l-2.837,2.837	c-0.689,0.689-1.773,0.781-2.568,0.219l-2.868-2.025c-1.283,0.738-2.668,1.311-4.129,1.707l-0.596,3.464	C35.812,53.299,34.98,54,34.006,54h-4.012c-0.974,0-1.806-0.701-1.971-1.661l-0.596-3.464c-1.461-0.395-2.846-0.969-4.129-1.707	l-2.868,2.025c-0.795,0.562-1.88,0.469-2.568-0.219l-2.837-2.837c-0.688-0.689-0.781-1.773-0.219-2.568l2.026-2.868	c-0.738-1.283-1.312-2.668-1.707-4.129l-3.464-0.596C10.701,35.812,10,34.98,10,34.006v-4.012c0-0.974,0.701-1.806,1.661-1.971	l3.464-0.596c0.395-1.461,0.969-2.846,1.707-4.129l-2.026-2.868c-0.562-0.795-0.469-1.88,0.219-2.568l2.837-2.837	c0.689-0.688,1.773-0.781,2.568-0.219l2.868,2.026c1.283-0.738,2.668-1.311,4.129-1.707l0.596-3.464	C28.188,10.701,29.02,10,29.994,10h4.012c0.974,0,1.806,0.701,1.971,1.661l0.596,3.464c1.461,0.395,2.846,0.969,4.129,1.707	l2.868-2.026c0.795-0.562,1.88-0.469,2.568,0.219l2.837,2.837c0.688,0.688,0.781,1.773,0.219,2.568l-2.026,2.868	c0.738,1.283,1.312,2.668,1.707,4.129L52.339,28.023z M32,40c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S27.582,40,32,40z"></path></svg></button></a></div> <div class="footer"></div> <main><div class="input-container"><input${attr("value", store_get($$store_subs ??= {}, "$query", query))} type="text" style="font-family: menlo;" placeholder="Search for an entity..."/></div> `);
    if (store_get($$store_subs ??= {}, "$results", results).length) {
      $$renderer2.push("<!--[0-->");
      if (store_get($$store_subs ??= {}, "$settings", settings).viewType === "ortholinear") {
        $$renderer2.push("<!--[0-->");
        OrthoLinearGraph($$renderer2, {
          results: store_get($$store_subs ??= {}, "$results", results),
          target: store_get($$store_subs ??= {}, "$targetResult", targetResult)
        });
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<ul><!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$results", results));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let item = each_array[$$index];
          $$renderer2.push(`<li><strong>${escape_html(item.title)}</strong><br/> <small>${escape_html(item.description)}</small></li>`);
        }
        $$renderer2.push(`<!--]--></ul>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p>No results</p>`);
    }
    $$renderer2.push(`<!--]--></main>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
