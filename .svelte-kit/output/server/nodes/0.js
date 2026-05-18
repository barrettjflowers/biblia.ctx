

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.vS9v5oCx.js","_app/immutable/chunks/B-UOGx60.js","_app/immutable/chunks/CwLVWWjD.js","_app/immutable/chunks/CYPKp5H3.js"];
export const stylesheets = [];
export const fonts = [];
