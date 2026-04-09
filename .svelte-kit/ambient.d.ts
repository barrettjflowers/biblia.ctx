
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const INFOPATH: string;
	export const PWD: string;
	export const HOMEBREW_PREFIX: string;
	export const LOGNAME: string;
	export const KITTY_WINDOW_ID: string;
	export const NVIM_CONFIG: string;
	export const LaunchInstanceID: string;
	export const SECURITYSESSIONID: string;
	export const LSCOLORS: string;
	export const HOMEBREW_REPOSITORY: string;
	export const PATH: string;
	export const KITTY_PUBLIC_KEY: string;
	export const CLICOLOR: string;
	export const LANG: string;
	export const _: string;
	export const NVM_CD_FLAGS: string;
	export const NVM_DIR: string;
	export const VIM: string;
	export const COMMAND_MODE: string;
	export const SSH_AUTH_SOCK: string;
	export const VIMRUNTIME: string;
	export const USER: string;
	export const SHELL: string;
	export const NVM_BIN: string;
	export const KITTY_PID: string;
	export const FZF_DEFAULT_OPTS: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const OLDPWD: string;
	export const NVM_INC: string;
	export const EDITOR: string;
	export const TERMINFO: string;
	export const TERM: string;
	export const COLORTERM: string;
	export const KITTY_INSTALLATION_DIR: string;
	export const WINDOWID: string;
	export const TG_TOKEN: string;
	export const TMPDIR: string;
	export const NVIM_LOG_FILE: string;
	export const XPC_FLAGS: string;
	export const MASON: string;
	export const __CFBundleIdentifier: string;
	export const HOME: string;
	export const PHP_INI_SCAN_DIR: string;
	export const MYVIMRC: string;
	export const XPC_SERVICE_NAME: string;
	export const HOMEBREW_CELLAR: string;
	export const SHLVL: string;
	export const NVIM: string;
	export const FZF_DEFAULT_COMMAND: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		INFOPATH: string;
		PWD: string;
		HOMEBREW_PREFIX: string;
		LOGNAME: string;
		KITTY_WINDOW_ID: string;
		NVIM_CONFIG: string;
		LaunchInstanceID: string;
		SECURITYSESSIONID: string;
		LSCOLORS: string;
		HOMEBREW_REPOSITORY: string;
		PATH: string;
		KITTY_PUBLIC_KEY: string;
		CLICOLOR: string;
		LANG: string;
		_: string;
		NVM_CD_FLAGS: string;
		NVM_DIR: string;
		VIM: string;
		COMMAND_MODE: string;
		SSH_AUTH_SOCK: string;
		VIMRUNTIME: string;
		USER: string;
		SHELL: string;
		NVM_BIN: string;
		KITTY_PID: string;
		FZF_DEFAULT_OPTS: string;
		__CF_USER_TEXT_ENCODING: string;
		OLDPWD: string;
		NVM_INC: string;
		EDITOR: string;
		TERMINFO: string;
		TERM: string;
		COLORTERM: string;
		KITTY_INSTALLATION_DIR: string;
		WINDOWID: string;
		TG_TOKEN: string;
		TMPDIR: string;
		NVIM_LOG_FILE: string;
		XPC_FLAGS: string;
		MASON: string;
		__CFBundleIdentifier: string;
		HOME: string;
		PHP_INI_SCAN_DIR: string;
		MYVIMRC: string;
		XPC_SERVICE_NAME: string;
		HOMEBREW_CELLAR: string;
		SHLVL: string;
		NVIM: string;
		FZF_DEFAULT_COMMAND: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
