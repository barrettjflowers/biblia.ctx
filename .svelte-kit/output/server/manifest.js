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
		client: {start:"_app/immutable/entry/start.CK67rWXD.js",app:"_app/immutable/entry/app.DQdcL2hE.js",imports:["_app/immutable/entry/start.CK67rWXD.js","_app/immutable/chunks/DCyyUEwl.js","_app/immutable/chunks/Bw4ULjQw.js","_app/immutable/chunks/CoAk0Zud.js","_app/immutable/entry/app.DQdcL2hE.js","_app/immutable/chunks/Bw4ULjQw.js","_app/immutable/chunks/qEZgaT_Y.js","_app/immutable/chunks/B6YrY4N0.js","_app/immutable/chunks/CoAk0Zud.js","_app/immutable/chunks/B-cJa4Qp.js","_app/immutable/chunks/_C5B5vWP.js","_app/immutable/chunks/CLaOGMk8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
