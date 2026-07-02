import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.2928OcGQ.js","_app/immutable/chunks/wm8tUp-P.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/D1MKmkwK.js"];
export const stylesheets = [];
export const fonts = [];
