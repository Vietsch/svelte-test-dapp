import { writable, get, derived  } from 'svelte/store';
import { browser } from '$app/environment';
import { setMode } from "mode-watcher";
import { modal,wagmiAdapter } from '$lib/components/web3appkit/appKit';
import { getCookieValue } from '$lib/utils';

/****************/
/* App Settings */
/************** */

let storedGeneral = { language: 'en', theme: 'light' };
if (browser) {
  const generalCookie = getCookieValue('appSettings.general');
  if (generalCookie) {
    storedGeneral = JSON.parse(generalCookie);
  }
}

// Initial state of the app's settings
const initialSettings = {
  general: {
    language: storedGeneral.language || '',
    theme: storedGeneral.theme || 'light',
    currentRoute: '/',
  },
  secure: {
    authToken: null, // Only set client-side or on login
  }
};

// Create a writable store for the app's settings
export const appSettings = writable(initialSettings);

// Create a store for wagmi state
export const wagmiStore = writable(null);

wagmiStore.subscribe((state) => {
  if (browser && state) {

    const currentCookieValue = getCookieValue('wagmi.store');
    const newCookieValue = JSON.stringify(state);

    console.log("currentCookieValue");
    console.log(currentCookieValue);
    console.log("newCookieValue");
    console.log(newCookieValue);

    /*
    if (currentCookieValue !== newCookieValue) {
    */
    // document.cookie = `wagmi.store=${encodeURIComponent(newCookieValue)}; path=/; max-age=${60 * 60 * 24 * 365}`;
    /*
      // Update `isLoggedIn` based on connection state
      const hasActiveConnection = state?.state?.connections?.value?.length > 0;
      */
      // document.cookie = `isLoggedIn=${hasActiveConnection}; path=/; max-age=${60 * 60 * 24 * 365}`;
      /*
      console.log("WagmiStore changed and cookie updated");
      console.log("New cookie", decodeURIComponent(document.cookie));
    } else {
      console.log("No changes detected in wagmi.store; cookie update skipped");
    }
    */
  }

});

appSettings.subscribe(async ({ general }) => {
  if (browser) {
    // Update cookie for general settings
    document.cookie = `appSettings.general=${encodeURIComponent(JSON.stringify(general))}; path=/; max-age=${60 * 60 * 24 * 365}`;
    console.log("Update cookie", JSON.stringify(general));
  }

  // Set theme mode if it has changed
  if (general.theme) {
    console.log("Setting default theme to", general.theme);

    // Sync theme for app GUI
    setMode(general.theme);

    if (modal) {
      // Sync AppKit's theme mode with app's theme
      modal.setThemeMode(general.theme);
    }
  }

});


/********************/
/* Session Settings */
/****************** */

// Create a derived store for isLoggedIn based on wagmiAdapter
export const isLoggedIn = derived(wagmiStore, () => {
  // Ensure `wagmiAdapter` is available before checking connection state
  return wagmiAdapter ? wagmiAdapter.appKit.getIsConnectedState() : false;
});