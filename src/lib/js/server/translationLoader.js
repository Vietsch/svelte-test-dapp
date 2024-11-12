import { locale, waitLocale } from 'svelte-i18n';
import { get } from 'svelte/store';

// Custom function to load route-specific translations
export async function loadTranslationsForRoute(routeName) {

  const currentLocale = get(locale);// Get the current language code
  const routeKey = `${currentLocale}-${routeName}`; // e.g., "en-dashboard"

  console.log("loadTranslationsForRoute", currentLocale, routeName);

  console.log("Loading language file", routeKey);

  await waitLocale(); // Wait for the main locale to be ready
  locale.set(routeKey); // Temporarily set the specific route key to load translations
   // Wait for the main locale to be ready
  locale.set(currentLocale); // Reset back to the base locale after loading
  await waitLocale();

  console.log("loadTranslationsForRoute", currentLocale, routeName);

  return currentLocale;
}
