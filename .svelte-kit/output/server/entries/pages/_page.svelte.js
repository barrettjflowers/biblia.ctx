import { a as attr, s as store_get, e as ensure_array_like, u as unsubscribe_stores } from "../../chunks/index2.js";
import { s as settings } from "../../chunks/settings.js";
import { d as derived, w as writable, g as get } from "../../chunks/index.js";
import { a0 as escape_html } from "../../chunks/context.js";
const insight = [
  {
    id: "moabite-stone",
    title: "The Moabite Stone",
    description: "9th-century BCE inscription by King Mesha",
    date: "c. 840 BCE",
    tags: ["inscription", "moabite"]
  },
  {
    id: "rosetta-stone",
    title: "The Rosetta Stone",
    description: "196 BCE Greek inscription key to deciphering hieroglyphs",
    date: "196 BCE",
    tags: ["inscription", "egypt", "translate"]
  },
  {
    id: "gilgamesh",
    title: "Epic of Gilgamesh",
    description: "Ancient Mesopotamian epic poem, one of the earliest works of literature",
    date: "c. 2100 BCE",
    tags: ["epic", "mesopotamia", "sumer"]
  },
  {
    id: "hammurabi",
    title: "Code of Hammurabi",
    description: "Babylonian legal text with 282 laws",
    date: "c. 1754 BCE",
    tags: ["law", "babylon", "mesopotamia"]
  },
  {
    id: "sargon-akkad",
    title: "Sargon of Akkad",
    description: "First emperor of the Akkadian Empire",
    date: "c. 2334 BCE",
    tags: ["king", "akkad", "mesopotamia"]
  },
  {
    id: "narmer-palette",
    title: "Narmer Palette",
    description: "Egyptian ceremonial palette depicting unification of Egypt",
    date: "c. 3100 BCE",
    tags: ["egypt", "unification", "palette"]
  },
  {
    id: "sphinx",
    title: "Great Sphinx of Giza",
    description: "Limestone statue of a reclining sphinx",
    date: "c. 2500 BCE",
    tags: ["egypt", "monument", "giza"]
  },
  {
    id: "pyramids-giza",
    title: "Pyramids of Giza",
    description: "Ancient pyramid complex including Khufu, Khafre, and Menkaure",
    date: "c. 2600 BCE",
    tags: ["egypt", "pyramid", "monument"]
  },
  {
    id: " UR",
    title: "Royal Cemetery of Ur",
    description: "Mesopotamian burial site with rich grave goods",
    date: "c. 2600 BCE",
    tags: ["mesopotamia", "burial", "ur"]
  },
  {
    id: "stele-hammurabi",
    title: "Stele of Hammurabi",
    description: "Black basalt stele with law code and image of Hammurabi",
    date: "c. 1754 BCE",
    tags: ["law", "monument", "babylon"]
  },
  {
    id: "enuma-elish",
    title: "Enuma Elish",
    description: "Babylonian creation epic",
    date: "c. 1200 BCE",
    tags: ["epic", "creation", "babylon"]
  },
  {
    id: "isis-temple",
    title: "Temple of Isis",
    description: "Egyptian temple complex at Philae",
    date: "c. 380 BCE",
    tags: ["egypt", "temple", "philae"]
  },
  {
    id: "deir-el-medinah",
    title: "Village of Deir el-Medina",
    description: "Workers village for tomb builders in the Valley of the Kings",
    date: "c. 1500 BCE",
    tags: ["egypt", "village", "workers"]
  },
  {
    id: "amarna-letters",
    title: "Amarna Letters",
    description: "Diplomatic correspondence from ancient Egypt",
    date: "c. 1400 BCE",
    tags: ["egypt", "correspondence", "diplomacy"]
  },
  {
    id: "tutankhamun",
    title: "Tutankhamun",
    description: "Young pharaoh of the 18th dynasty",
    date: "c. 1323 BCE",
    tags: ["egypt", "pharaoh", "new-kingdom"]
  },
  {
    id: "ramses-ii",
    title: "Ramses II",
    description: "Great pharaoh of the New Kingdom, builder of Abu Simbel",
    date: "c. 1279 BCE",
    tags: ["egypt", "pharaoh", "abu-simbel"]
  },
  {
    id: "solomon-temple",
    title: "Temple of Solomon",
    description: "First temple in Jerusalem built by King Solomon",
    date: "c. 950 BCE",
    tags: ["israel", "temple", "jerusalem"]
  }
];
function parseYear(dateStr) {
  if (!dateStr || typeof dateStr !== "string") return null;
  const cleaned = dateStr.toLowerCase().replace(/[.\s]/g, "").replace(/^c/, "");
  const bceMatch = cleaned.match(/^(\d+)(?:-\d+)?bce$/);
  if (bceMatch) {
    return -parseInt(bceMatch[1], 10);
  }
  const ceMatch = cleaned.match(/^(\d+)(?:ce)?$/);
  if (ceMatch) {
    return parseInt(ceMatch[1], 10);
  }
  const rangeMatch = cleaned.match(/^(\d+)(?:-\d+)?(?:bce|ce)?$/);
  if (rangeMatch) {
    return parseInt(rangeMatch[1], 10);
  }
  const yearWordMatch = cleaned.match(/year\s*(\d+)/i);
  if (yearWordMatch) {
    const year = parseInt(yearWordMatch[1], 10);
    return cleaned.includes("bce") ? -year : year;
  }
  return null;
}
function isWithinRange(year, referenceYear, contextYears) {
  if (year === null) return false;
  return Math.abs(year - referenceYear) <= contextYears;
}
const query = writable("");
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
const results = derived(query, ($query) => {
  if (!$query.trim()) {
    return [];
  }
  const yearsContext = get(settings).yearsContext;
  const scored = insight.map((item) => ({
    item,
    score: Math.min(
      fuzzyScore(item.title, $query),
      fuzzyScore(item.description, $query),
      item.tags ? fuzzyScore(item.tags.join(" "), $query) : Infinity
    )
  })).filter((r) => r.score <= Math.max(2, $query.length / 3)).sort((a, b) => a.score - b.score);
  if (scored.length === 0) {
    return [];
  }
  const topResult = scored[0];
  const referenceYear = parseYear(topResult.item.date);
  if (referenceYear === null) {
    return [topResult.item];
  }
  return scored.filter((r) => isWithinRange(parseYear(r.item.date), referenceYear, yearsContext)).map((r) => r.item);
});
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="header"><span class="title-inner"><h1 class="title" style="text-align: center; margin-bottom: 1.5rem; margin-top: 0rem;">Biblia<span class="accent">.ctx</span></h1> <svg class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.291 14.3262"><g><rect height="14.3262" opacity="0" width="18.291" x="0" y="0"></rect><path d="M4.33594 0C2.62695 0 0.878906 0.810547 0.0878906 2.1875C0 2.34375 0 2.45117 0 2.76367L0 13.6719C0 14.0625 0.253906 14.3066 0.683594 14.3066C0.878906 14.3066 1.07422 14.248 1.24023 14.1016C2.20703 13.291 3.45703 12.8613 4.69727 12.8613C5.83008 12.8613 6.94336 13.2227 7.79297 13.9551C7.88086 14.0332 7.98828 14.0723 8.07617 14.0723C8.25195 14.0723 8.39844 13.9355 8.39844 13.7305L8.39844 2.25586C8.39844 2.04102 8.38867 2.01172 8.22266 1.77734C7.50977 0.683594 6.00586 0 4.33594 0ZM13.5938 0C11.9238 0 10.4199 0.683594 9.70703 1.77734C9.54102 2.01172 9.53125 2.04102 9.53125 2.25586L9.53125 13.7305C9.53125 13.9355 9.67773 14.0723 9.85352 14.0723C9.94141 14.0723 10.0488 14.0332 10.1367 13.9551C10.9863 13.2227 12.0996 12.8613 13.2227 12.8613C14.4727 12.8613 15.7227 13.291 16.6895 14.1016C16.8555 14.248 17.0508 14.3066 17.2461 14.3066C17.6758 14.3066 17.9297 14.0625 17.9297 13.6719L17.9297 2.76367C17.9297 2.45117 17.9297 2.34375 17.8418 2.1875C17.0508 0.810547 15.3027 0 13.5938 0Z" fill="white" fill-opacity="0.85"></path></g></svg></span> <hr style="margin-top: 0rem; margin-bottom: 1rem; border: none; border-top: 1px solid var(--text-color);"/> <p style="margin: 0.03rem 0;margin-bottom: -5em; text-align: center;">Quick historical context for anthropology.</p> <a href="/settings"><button style="scale: 0.3; transform: translate(500%, -110%); margin: 0;" class="btn"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"><path d="M52.339,28.023C53.299,28.188,54,29.02,54,29.994v4.012c0,0.974-0.701,1.806-1.661,1.971l-3.464,0.596	c-0.395,1.461-0.969,2.846-1.707,4.129l2.026,2.868c0.562,0.795,0.469,1.88-0.219,2.568l-2.837,2.837	c-0.689,0.689-1.773,0.781-2.568,0.219l-2.868-2.025c-1.283,0.738-2.668,1.311-4.129,1.707l-0.596,3.464	C35.812,53.299,34.98,54,34.006,54h-4.012c-0.974,0-1.806-0.701-1.971-1.661l-0.596-3.464c-1.461-0.395-2.846-0.969-4.129-1.707	l-2.868,2.025c-0.795,0.562-1.88,0.469-2.568-0.219l-2.837-2.837c-0.688-0.689-0.781-1.773-0.219-2.568l2.026-2.868	c-0.738-1.283-1.312-2.668-1.707-4.129l-3.464-0.596C10.701,35.812,10,34.98,10,34.006v-4.012c0-0.974,0.701-1.806,1.661-1.971	l3.464-0.596c0.395-1.461,0.969-2.846,1.707-4.129l-2.026-2.868c-0.562-0.795-0.469-1.88,0.219-2.568l2.837-2.837	c0.689-0.688,1.773-0.781,2.568-0.219l2.868,2.026c1.283-0.738,2.668-1.311,4.129-1.707l0.596-3.464	C28.188,10.701,29.02,10,29.994,10h4.012c0.974,0,1.806,0.701,1.971,1.661l0.596,3.464c1.461,0.395,2.846,0.969,4.129,1.707	l2.868-2.026c0.795-0.562,1.88-0.469,2.568,0.219l2.837,2.837c0.688,0.688,0.781,1.773,0.219,2.568l-2.026,2.868	c0.738,1.283,1.312,2.668,1.707,4.129L52.339,28.023z M32,40c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S27.582,40,32,40z"></path></svg></button></a></div> <main></main> <div class="footer"></div> <main><div class="input-container"><input${attr("value", store_get($$store_subs ??= {}, "$query", query))} type="text" style="font-family: menlo;" placeholder="Search for an entity..."/></div> `);
    if (store_get($$store_subs ??= {}, "$results", results).length) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<ul><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$results", results));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        $$renderer2.push(`<li><strong>${escape_html(item.name)}</strong><br/> <small>${escape_html(item.description)}</small></li>`);
      }
      $$renderer2.push(`<!--]--></ul>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>No results</p>`);
    }
    $$renderer2.push(`<!--]--></main>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
