import { w as writable } from "./index.js";
const defaultSettings = {
  yearsContext: 20
};
function loadSettings() {
  return defaultSettings;
}
function createSettingsStore() {
  const { subscribe, set, update } = writable(loadSettings());
  return {
    subscribe,
    set: (value) => {
      update((current) => {
        const merged = { ...current, ...value };
        return merged;
      });
    },
    update: (fn) => {
      update((current) => {
        const updated = fn(current);
        return updated;
      });
    },
    reset: () => {
      set(defaultSettings);
    }
  };
}
const settings = createSettingsStore();
export {
  settings as s
};
