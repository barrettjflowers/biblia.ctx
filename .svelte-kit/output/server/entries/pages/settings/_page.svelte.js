import { i as store_get, f as attr, c as ensure_array_like, e as escape_html, u as unsubscribe_stores } from "../../../chunks/root.js";
import { s as settings, i as insights, c as composite } from "../../../chunks/settings.js";
import { b as base } from "../../../chunks/server.js";
import "../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let yearsContext = store_get($$store_subs ??= {}, "$settings", settings).yearsContext;
    let dataset = store_get($$store_subs ??= {}, "$settings", settings).dataset;
    let viewType = store_get($$store_subs ??= {}, "$settings", settings).viewType;
    const datasetOptions = [
      {
        value: "insight",
        label: `Insight Book (${insights.length} entries)`
      },
      {
        value: "composite",
        label: `Composite (${composite.length} entries)`
      }
    ];
    $$renderer2.push(`<div class="header"><span class="title-inner"><h1 class="title" style="text-align: center;">Settings</h1></span> <hr style="margin-top: 0rem; margin-bottom: 1rem; margin-left: 1rem; margin-right: 1rem; border: none; border-top: 1px solid var(--text-color);"/> <p style="margin: 0.03rem 0;padding-bottom: 1rem; text-align: center;">Configure search engine behavior.</p> <a${attr("href", base || "/")} class="settings-btn" aria-label="Open settings"><button class="btn" aria-label="Open settings"><svg width="25" height="25" viewBox="0 0 24 18" fill="black"><path d="M12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 19.5v-9L12 3z"></path></svg></button></a></div> <main><div class="settings-wrap svelte-1i19ct2">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="settings svelte-1i19ct2"><div class="svelte-1i19ct2">Dataset: `);
    $$renderer2.select({ name: "search-type", id: "search-type", value: dataset }, ($$renderer3) => {
      $$renderer3.push(`<!--[-->`);
      const each_array = ensure_array_like(datasetOptions);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let option = each_array[$$index];
        $$renderer3.option({ value: option.value }, ($$renderer4) => {
          $$renderer4.push(`${escape_html(option.label)}`);
        });
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`</div> <div class="svelte-1i19ct2"><label for="view-type">View Type:</label> `);
    $$renderer2.select({ name: "view-type", id: "view-type", value: viewType }, ($$renderer3) => {
      $$renderer3.option({ value: "list" }, ($$renderer4) => {
        $$renderer4.push(`List`);
      });
      $$renderer3.option({ value: "ortholinear" }, ($$renderer4) => {
        $$renderer4.push(`Contextual Timeline`);
      });
    });
    $$renderer2.push(`</div> <div class="svelte-1i19ct2"><label for="years-context">Context Window:</label> `);
    $$renderer2.select({ id: "years-context", value: yearsContext }, ($$renderer3) => {
      $$renderer3.option({ value: 100 }, ($$renderer4) => {
        $$renderer4.push(`100 years`);
      });
      $$renderer3.option({ value: 200 }, ($$renderer4) => {
        $$renderer4.push(`200 years`);
      });
      $$renderer3.option({ value: 500 }, ($$renderer4) => {
        $$renderer4.push(`500 years`);
      });
      $$renderer3.option({ value: 1e3 }, ($$renderer4) => {
        $$renderer4.push(`1000 years`);
      });
      $$renderer3.option({ value: 9e3 }, ($$renderer4) => {
        $$renderer4.push(`All time`);
      });
    });
    $$renderer2.push(`</div> <div class="svelte-1i19ct2"><div class="save-row svelte-1i19ct2"><button>Save</button></div></div></div></div></main> <footer class="site-footer svelte-1i19ct2"><p class="svelte-1i19ct2">Not affiliated with the Watch Tower Bible and Tract Society of Pennsylvania.</p> <p class="svelte-1i19ct2">Entries from <a href="https://www.jw.org/en/library/books/Insight-on-the-Scriptures/" target="_blank" rel="noopener"><em>Insight on the Scriptures</em></a> © Watch Tower Bible and Tract Society of Pennsylvania.</p> <p class="svelte-1i19ct2">Dates are approximate and based on traditional chronology.</p> <p class="svelte-1i19ct2">Want to contribute or provide feedback? See the contact section of <a href="https://barrettjflowers.dev" target="_blank" rel="noopener">barrettjflowers.dev</a>.</p> <p class="svelte-1i19ct2">Made by <a href="https://barrettjflowers.dev" target="_blank" rel="noopener">Barrett Flowers</a> · <a href="https://github.com/barrettjflowers/biblia.ctx" target="_blank" rel="noopener">Source</a> · Updated 2026-11-04</p></footer> <div class="footer"></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
