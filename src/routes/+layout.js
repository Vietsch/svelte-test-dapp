import { get } from 'svelte/store';
import { appSettings } from '$lib/stores/appStore';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {
  if (!data) {
    console.warn('No data found, using defaults');
    return {
      generalSettings: {},
      cssVariables: {}
    }
  }

  console.log("");
  console.log("----------------------------------------");
  console.log("Client side preprocessing (+layout.js)");
  console.log("----------------------------------------");

  const { generalSettings } = data;

  // 1. check if generalsettings from cookie or other detections (like language) are different from the stored settings  
  const currentGeneralSettings = get(appSettings).general;
  const isDifferent = JSON.stringify(currentGeneralSettings) !== JSON.stringify(generalSettings);
  console.log("generalSettings", generalSettings, "Cookie data is different:", isDifferent);

  // 3. Update appSettings only if the language was auto-detected
  if (generalSettings && isDifferent) {
    console.log("Saving changed appSettings");
    
    appSettings.update(settings => ({
      ...settings,
      general: { ...settings.general, ...generalSettings },
    }));
  }
};