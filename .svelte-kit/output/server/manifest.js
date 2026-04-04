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
		client: {start:"_app/immutable/entry/start.DT0KjQFX.js",app:"_app/immutable/entry/app.Dkgd_zl_.js",imports:["_app/immutable/entry/start.DT0KjQFX.js","_app/immutable/chunks/BCaylju2.js","_app/immutable/chunks/DI5A4Kck.js","_app/immutable/chunks/CIDdHxO4.js","_app/immutable/chunks/DTI9cpo2.js","_app/immutable/entry/app.Dkgd_zl_.js","_app/immutable/chunks/DI5A4Kck.js","_app/immutable/chunks/BJn8kXPt.js","_app/immutable/chunks/hnPv7VQJ.js","_app/immutable/chunks/o1tGCnz4.js","_app/immutable/chunks/DTI9cpo2.js","_app/immutable/chunks/BEMghJ75.js","_app/immutable/chunks/oAb9TNuw.js","_app/immutable/chunks/DLPSzTwf.js","_app/immutable/chunks/CIDdHxO4.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
