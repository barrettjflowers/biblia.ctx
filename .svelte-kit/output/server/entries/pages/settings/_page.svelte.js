import { f as store_get, e as ensure_array_like, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { s as settings, a as insights, i as insight } from "../../../chunks/settings.js";
import { a0 as escape_html } from "../../../chunks/context.js";
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
        value: "example",
        label: `Examples (${insight.length} entries)`
      }
    ];
    $$renderer2.push(`<div class="header"><span class="title-inner"><h1 class="title" style="text-align: center; margin-bottom: 1.5rem; margin-top: 0rem;">Settings</h1></span> <hr style="margin-top: 0rem; margin-bottom: 1rem; border: none; border-top: 1px solid var(--text-color);"/> <p style="margin: 0.03rem 0;padding-bottom: 1rem; text-align: center;">Configure search engine behavior.</p> <a href="/" class="settings-btn" aria-label="Open settings"><button class="btn" aria-label="Open settings"><svg width="25" height="25" viewBox="0 0 24 18" fill="black"><path d="M12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5H15a1 1 0 0 1-1-1v-5h-4v5a1 1 0 0 1-1 1H4.5A1.5 1.5 0 0 1 3 19.5v-9L12 3z"></path></svg></button></a></div> <main><div class="settings"><div>Dataset: `);
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
    $$renderer2.push(`</div> <div><label for="view-type">View Type:</label> `);
    $$renderer2.select({ name: "view-type", id: "view-type", value: viewType }, ($$renderer3) => {
      $$renderer3.option({ value: "list" }, ($$renderer4) => {
        $$renderer4.push(`List`);
      });
      $$renderer3.option({ value: "ortholinear" }, ($$renderer4) => {
        $$renderer4.push(`Ortholinear Graph`);
      });
    });
    $$renderer2.push(`</div> <div><label for="years-context">Context Window:</label> `);
    $$renderer2.select({ id: "years-context", value: yearsContext }, ($$renderer3) => {
      $$renderer3.option({ value: 50 }, ($$renderer4) => {
        $$renderer4.push(`50 years`);
      });
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
      $$renderer3.option({ value: 2e3 }, ($$renderer4) => {
        $$renderer4.push(`2000 years`);
      });
    });
    $$renderer2.push(`</div> <div><button>Save</button></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></main> <div class="footer"></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
