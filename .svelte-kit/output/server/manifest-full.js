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
		client: {start:"_app/immutable/entry/start.CbypACGM.js",app:"_app/immutable/entry/app.CJjy4gqB.js",imports:["_app/immutable/entry/start.CbypACGM.js","_app/immutable/chunks/-Bu79i_Q.js","_app/immutable/chunks/CwLVWWjD.js","_app/immutable/chunks/C7GgLSEw.js","_app/immutable/chunks/lKyFwtZN.js","_app/immutable/entry/app.CJjy4gqB.js","_app/immutable/chunks/CwLVWWjD.js","_app/immutable/chunks/BuCS8nik.js","_app/immutable/chunks/B-UOGx60.js","_app/immutable/chunks/lKyFwtZN.js","_app/immutable/chunks/Bq3lSYV9.js","_app/immutable/chunks/CYPKp5H3.js","_app/immutable/chunks/C7GgLSEw.js","_app/immutable/chunks/eWy2OgWM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
