export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DLbbDVk-.js",app:"_app/immutable/entry/app.H1E7Govb.js",imports:["_app/immutable/entry/start.DLbbDVk-.js","_app/immutable/chunks/D7ZJZDUk.js","_app/immutable/chunks/CS35Ov3Z.js","_app/immutable/chunks/DXb8RUFq.js","_app/immutable/chunks/DDHgHFXa.js","_app/immutable/entry/app.H1E7Govb.js","_app/immutable/chunks/CS35Ov3Z.js","_app/immutable/chunks/BVO9g21V.js","_app/immutable/chunks/DJtaDcc-.js","_app/immutable/chunks/DDHgHFXa.js","_app/immutable/chunks/HwXXLp-4.js","_app/immutable/chunks/DfUsncQR.js","_app/immutable/chunks/CY6dsbjX.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
