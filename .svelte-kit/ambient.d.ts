
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const LSCOLORS: string;
	export const npm_config_userconfig: string;
	export const COLORTERM: string;
	export const HYPRLAND_CMD: string;
	export const npm_config_cache: string;
	export const HISTCONTROL: string;
	export const NVIM_CONFIG: string;
	export const XDG_BACKEND: string;
	export const CALDAV_USER: string;
	export const HISTSIZE: string;
	export const HOSTNAME: string;
	export const NODE: string;
	export const AGENT: string;
	export const COLOR: string;
	export const npm_config_local_prefix: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const KITTY_PID: string;
	export const npm_config_globalconfig: string;
	export const XCURSOR_SIZE: string;
	export const GPG_TTY: string;
	export const EDITOR: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_config_init_module: string;
	export const _: string;
	export const KITTY_PUBLIC_KEY: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const OPENCODE_PID: string;
	export const HOME: string;
	export const OPENCODE: string;
	export const SSH_ASKPASS: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const WAYLAND_DISPLAY: string;
	export const TG_TOKEN: string;
	export const KITTY_WINDOW_ID: string;
	export const CLICOLOR: string;
	export const INIT_CWD: string;
	export const npm_lifecycle_script: string;
	export const MOZ_GMP_PATH: string;
	export const NVM_DIR: string;
	export const npm_config_npm_version: string;
	export const CALDAV_PASS: string;
	export const XDG_SESSION_CLASS: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_config_prefix: string;
	export const LESSOPEN: string;
	export const USER: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const HL_EXEC_RULE_TOKEN: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_json: string;
	export const WLR_DRM_NO_MODIFIERS: string;
	export const DEBUGINFOD_IMA_CERT_PATH: string;
	export const KDEDIRS: string;
	export const HYPRCURSOR_THEME: string;
	export const XCURSOR_THEME: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_noproxy: string;
	export const PATH: string;
	export const npm_config_node_gyp: string;
	export const PHP_INI_SCAN_DIR: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const FZF_DEFAULT_OPTS: string;
	export const CARGO: string;
	export const npm_config_global_prefix: string;
	export const npm_config_update_notifier: string;
	export const MAIL: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const OLDPWD: string;
	export const HYPRCURSOR_SIZE: string;
	export const NODE_ENV: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		LSCOLORS: string;
		npm_config_userconfig: string;
		COLORTERM: string;
		HYPRLAND_CMD: string;
		npm_config_cache: string;
		HISTCONTROL: string;
		NVIM_CONFIG: string;
		XDG_BACKEND: string;
		CALDAV_USER: string;
		HISTSIZE: string;
		HOSTNAME: string;
		NODE: string;
		AGENT: string;
		COLOR: string;
		npm_config_local_prefix: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		KITTY_PID: string;
		npm_config_globalconfig: string;
		XCURSOR_SIZE: string;
		GPG_TTY: string;
		EDITOR: string;
		XDG_SEAT: string;
		PWD: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		npm_config_init_module: string;
		_: string;
		KITTY_PUBLIC_KEY: string;
		FZF_DEFAULT_COMMAND: string;
		OPENCODE_PID: string;
		HOME: string;
		OPENCODE: string;
		SSH_ASKPASS: string;
		LANG: string;
		LS_COLORS: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		WAYLAND_DISPLAY: string;
		TG_TOKEN: string;
		KITTY_WINDOW_ID: string;
		CLICOLOR: string;
		INIT_CWD: string;
		npm_lifecycle_script: string;
		MOZ_GMP_PATH: string;
		NVM_DIR: string;
		npm_config_npm_version: string;
		CALDAV_PASS: string;
		XDG_SESSION_CLASS: string;
		TERMINFO: string;
		TERM: string;
		npm_package_name: string;
		npm_config_prefix: string;
		LESSOPEN: string;
		USER: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		HL_EXEC_RULE_TOKEN: string;
		MOZ_ENABLE_WAYLAND: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		DEBUGINFOD_URLS: string;
		npm_package_json: string;
		WLR_DRM_NO_MODIFIERS: string;
		DEBUGINFOD_IMA_CERT_PATH: string;
		KDEDIRS: string;
		HYPRCURSOR_THEME: string;
		XCURSOR_THEME: string;
		XDG_DATA_DIRS: string;
		npm_config_noproxy: string;
		PATH: string;
		npm_config_node_gyp: string;
		PHP_INI_SCAN_DIR: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		FZF_DEFAULT_OPTS: string;
		CARGO: string;
		npm_config_global_prefix: string;
		npm_config_update_notifier: string;
		MAIL: string;
		KITTY_INSTALLATION_DIR: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		OLDPWD: string;
		HYPRCURSOR_SIZE: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
