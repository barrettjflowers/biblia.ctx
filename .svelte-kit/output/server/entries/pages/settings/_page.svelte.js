import { s as store_get, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { s as settings } from "../../../chunks/settings.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let yearsContext = store_get($$store_subs ??= {}, "$settings", settings).yearsContext;
    $$renderer2.push(`<div class="header"><span class="title-inner"><h1 class="title" style="text-align: center; margin-bottom: 1.5rem; margin-top: 0rem;">Settings</h1></span> <hr style="margin-top: 0rem; margin-bottom: 1rem; border: none; border-top: 1px solid var(--text-color);"/> <p style="margin: 0.03rem 0; text-align: center;">Configure search engine behavior.</p></div> <main><div class="settings"><div><select name="search-type" id="search-type">`);
    $$renderer2.option({ value: "insight" }, ($$renderer3) => {
      $$renderer3.push(`Insight Book`);
    });
    $$renderer2.option({ value: "apocryphal" }, ($$renderer3) => {
      $$renderer3.push(`Apocryphal`);
    });
    $$renderer2.push(`<select></select><!></select></div> <div><button>Import Dataset: (Json)</button></div> <div><select name="view-type" id="view-type">`);
    $$renderer2.option({ value: "graph" }, ($$renderer3) => {
      $$renderer3.push(`Graph`);
    });
    $$renderer2.option({ value: "list" }, ($$renderer3) => {
      $$renderer3.push(`List`);
    });
    $$renderer2.push(`</select></div> <div><label for="years-context">Years Context:</label> `);
    $$renderer2.select({ id: "years-context", value: yearsContext }, ($$renderer3) => {
      $$renderer3.option({ value: 10 }, ($$renderer4) => {
        $$renderer4.push(`10 years`);
      });
      $$renderer3.option({ value: 20 }, ($$renderer4) => {
        $$renderer4.push(`20 years`);
      });
      $$renderer3.option({ value: 30 }, ($$renderer4) => {
        $$renderer4.push(`30 years`);
      });
      $$renderer3.option({ value: 50 }, ($$renderer4) => {
        $$renderer4.push(`50 years`);
      });
      $$renderer3.option({ value: 100 }, ($$renderer4) => {
        $$renderer4.push(`100 years`);
      });
    });
    $$renderer2.push(`</div> <div><button>Save</button></div> <div><button>Import Config</button></div> <div><button>Export Config</button></div></div></main> <div class="footer"></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
