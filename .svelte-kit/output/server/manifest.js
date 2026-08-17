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
		client: {start:"_app/immutable/entry/start.FhaM4GgS.js",app:"_app/immutable/entry/app.CUPkNppZ.js",imports:["_app/immutable/entry/start.FhaM4GgS.js","_app/immutable/chunks/DeJJN4d9.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/BNEa62hT.js","_app/immutable/chunks/9h64GRdS.js","_app/immutable/entry/app.CUPkNppZ.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/CyRISe-T.js","_app/immutable/chunks/wm8tUp-P.js","_app/immutable/chunks/9h64GRdS.js","_app/immutable/chunks/DCl7gnXt.js","_app/immutable/chunks/D1MKmkwK.js","_app/immutable/chunks/BV9QwEmw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/settings"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
