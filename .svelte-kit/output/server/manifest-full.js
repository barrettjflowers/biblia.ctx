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
		client: {start:"_app/immutable/entry/start.Buzz6JDm.js",app:"_app/immutable/entry/app.CjKiQNQZ.js",imports:["_app/immutable/entry/start.Buzz6JDm.js","_app/immutable/chunks/bKlrbvt0.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/-EkgHQgD.js","_app/immutable/chunks/9h64GRdS.js","_app/immutable/entry/app.CjKiQNQZ.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/CyRISe-T.js","_app/immutable/chunks/wm8tUp-P.js","_app/immutable/chunks/9h64GRdS.js","_app/immutable/chunks/DCl7gnXt.js","_app/immutable/chunks/D1MKmkwK.js","_app/immutable/chunks/BV9QwEmw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
