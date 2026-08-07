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
		client: {start:"_app/immutable/entry/start.CfN3lnt3.js",app:"_app/immutable/entry/app.BOw_LAqc.js",imports:["_app/immutable/entry/start.CfN3lnt3.js","_app/immutable/chunks/Cq3ZL1ye.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/CB7GZfLs.js","_app/immutable/chunks/9h64GRdS.js","_app/immutable/entry/app.BOw_LAqc.js","_app/immutable/chunks/CKq8ZO5X.js","_app/immutable/chunks/CyRISe-T.js","_app/immutable/chunks/wm8tUp-P.js","_app/immutable/chunks/9h64GRdS.js","_app/immutable/chunks/DCl7gnXt.js","_app/immutable/chunks/D1MKmkwK.js","_app/immutable/chunks/BV9QwEmw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
