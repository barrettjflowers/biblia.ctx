import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BOb5m_Tu.js","_app/immutable/chunks/2yKqF80R.js","_app/immutable/chunks/CMIBaibH.js","_app/immutable/chunks/DDEQlfB0.js"];
export const stylesheets = [];
export const fonts = [];
