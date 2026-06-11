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
		client: {start:"_app/immutable/entry/start.BP1cdHdJ.js",app:"_app/immutable/entry/app.D3ZOJHIb.js",imports:["_app/immutable/entry/start.BP1cdHdJ.js","_app/immutable/chunks/SUaH0si8.js","_app/immutable/chunks/CMIBaibH.js","_app/immutable/chunks/Bu95DgDw.js","_app/immutable/chunks/ZIKzQvqL.js","_app/immutable/entry/app.D3ZOJHIb.js","_app/immutable/chunks/CMIBaibH.js","_app/immutable/chunks/CXUni8B5.js","_app/immutable/chunks/2yKqF80R.js","_app/immutable/chunks/ZIKzQvqL.js","_app/immutable/chunks/BgKB3Vtx.js","_app/immutable/chunks/DDEQlfB0.js","_app/immutable/chunks/BmQTRk31.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
