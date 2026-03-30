import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const SETTINGS_KEY = 'biblia-settings';

export interface Settings {
	yearsContext: number;
}

const defaultSettings: Settings = {
	yearsContext: 50
};

function loadSettings(): Settings {
	if (!browser) return defaultSettings;
	const stored = localStorage.getItem(SETTINGS_KEY);
	if (stored) {
		try {
			return { ...defaultSettings, ...JSON.parse(stored) };
		} catch {
			return defaultSettings;
		}
	}
	return defaultSettings;
}

function createSettingsStore() {
	const { subscribe, set, update } = writable<Settings>(loadSettings());

	return {
		subscribe,
		set: (value: Partial<Settings>) => {
			update((current) => {
				const merged = { ...current, ...value };
				if (browser) {
					localStorage.setItem(SETTINGS_KEY, JSON.stringify(merged));
				}
				return merged;
			});
		},
		update: (fn: (settings: Settings) => Settings) => {
			update((current) => {
				const updated = fn(current);
				if (browser) {
					localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
				}
				return updated;
			});
		},
		reset: () => {
			if (browser) {
				localStorage.removeItem(SETTINGS_KEY);
			}
			set(defaultSettings);
		}
	};
}

export const settings = createSettingsStore();
