import getCssVariablesFromFile from '$lib/js/server/extractCssVariables';
import { APPKIT_PROJECT_ID } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { cookieToInitialState } from '@wagmi/core';
import { wagmiAdapter } from '$lib/components/web3appkit/appKit';


/** @type {import('@sveltejs/kit').ServerLoad} */
export const load = async ({ url, cookies, request }) => {
  console.log("");
  console.log("----------------------------------------");
  console.log("Server side preprocessing (+layout.server.js)");
  console.log("----------------------------------------");

  // reading all cookies
  const allCookies = cookies.getAll();
  console.log("All cookies: " + allCookies.length);

  console.log(wagmiAdapter ? wagmiAdapter : null);
  // const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  // Parsing wagmi store cookie if it exists

  const cookieString = request.headers.get('cookie');

  // let wagmiState = null;
  const wagmiStoreCookie = cookies.get('wagmi.store');
  // Define your config for wagmi's cookie key, adjusting storage key if necessary
  const config = { storage: { key: 'wagmi' } };
  const initialWagmiState = cookieToInitialState(config, cookieString);

  console.log("initialWagmiState", initialWagmiState);

  if (initialWagmiState) {
    try {
      // Check if there are any active connections
      const hasActiveConnection = initialWagmiState?.connections?.value?.length > 0;
      
      // Update isLoggedIn based on wagmi connection state
      if (hasActiveConnection) {
        cookies.set('isLoggedIn', 'true', {
          path: '/',
          maxAge: 60 * 60 * 24 * 365 // 1 year
        });
      } else {
        cookies.set('isLoggedIn', 'false', {
          path: '/',
          maxAge: 60 * 60 * 24 * 365
        });
      }
    } catch (error) {
      console.error('Failed to parse wagmi.store cookie:', error);
    }
  }

  // Log each cookie's name and value
  allCookies.forEach(({ name, value }) => {
    console.log(`Cookie: ${name} = ${value}`);
  });
  
  const isLoggedIn = cookies.get('isLoggedIn') === 'true';
  const currentPath = url.pathname;

  if (currentPath !== '/')
  {
    console.log("Dashboard   route: isLoggedIn", isLoggedIn);

    // Redirect to the launch page if not authenticated and not already on the launch page
    if (!isLoggedIn) {
      console.log("NOT LOGGED IN -> Redirect to '/'");
      throw redirect(303, '/'); // Use 303 or 302 as preferred
    }
  }

  // setting project config
  const projectConfig = {
    projectId: APPKIT_PROJECT_ID,
    isLoggedIn: isLoggedIn
  }

  // Attempt to retrieve `appSettings.general` from the cookie and parse it
  let generalSettings = {};
  const generalCookie = cookies.get('appSettings.general');
  if (generalCookie) {
    try {
      generalSettings = JSON.parse(generalCookie);

      console.log("Cookie read", generalSettings);

    } catch (error) {
      console.error('Failed to parse appSettings.general cookie:', error);
    }
  }

  // 6: get css variables form appSettings.css
  const cssVariables = getCssVariablesFromFile("app.css");
  
  // 7. get config data for AppKit (reown.com)
  console.log("projectId", APPKIT_PROJECT_ID);

  return {
    generalSettings,
    cssVariables,
    projectConfig,
    initialWagmiState
  };
};