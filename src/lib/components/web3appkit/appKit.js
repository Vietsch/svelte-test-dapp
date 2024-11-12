import { createAppKit } from '@reown/appkit';
import { cookieStorage, createStorage, reconnect, connect, http } from '@wagmi/core'
import { mainnet, arbitrum } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { get } from 'svelte/store';
import { isLoggedIn, wagmiStore, appSettings } from '$lib/stores/appStore';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';
import { getCookieValue } from '$lib/utils';

// Define the supported networks
export const networks = [mainnet, arbitrum];

let wagmiAdapter = null;
let modal;
let isInitialized = false;
let openCallback = null;

export async function initializeAppKit(config, state = null) {
  if (!browser) return;

  console.log("initializeAppKit");

  /*
  // Parse the wagmi store cookie
  let savedWagmiState = null;

  const wagmiCookie = getCookieValue('wagmi.store');

  if (wagmiCookie && wagmiCookie.state) {

    wagmiStore.set(wagmiCookie.state);

    console.log("wagmiCookie.state", wagmiCookie.state);
  } else {
    console.log("wagmiCookie undefined");
  }
  */

  console.log("Defining Wagmi Adapater with intialState ", JSON.stringify(state));

  // Initialize wagmi adapter with saved state if available
  wagmiAdapter = new WagmiAdapter({
    projectId: config.projectId,
    networks: networks,
    storage: createStorage({
      storage: cookieStorage
    }),
    state
  });

  if (!isInitialized) {
    console.log("Initializing AppKit with config", config);

    modal = createAppKit({
      adapters: [wagmiAdapter],
      projectId: config.projectId,
      networks: networks,
      themeMode: config.themeMode || 'dark',
      defaultNetwork: mainnet,
      metadata: config.metaData || {},
      themeVariables: config.themeVariables || {},
      features: {
        analytics: true,
        social: true,
        email: true,
        legalCheckbox: true,
        socials: ['google', 'apple', 'x', 'github', 'discord', 'facebook', 'farcaster']
      },
      debug: true,
      defaultNetwork: mainnet,
      featuredWalletIds: [
        '18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1',
        'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927'
      ]
    });

    console.log(wagmiAdapter);

//     console.log("Current connections:", await wagmiAdapter.getConnections());

    let s = await wagmiAdapter.connectionControllerClient;
    console.log("getClient:", s);

    const wagmiState = await wagmiAdapter.wagmiConfig.state;
    console.log("Current wagmiState:", wagmiState);

    console.log("initial connection state", wagmiAdapter.appKit.getIsConnectedState());

    modal.subscribeEvents(async (event) => {
      console.log("AppKit Event:", event);


      const isConnected = wagmiAdapter.appKit.getIsConnectedState();
      const currentRoute = get(appSettings).general.currentRoute;
      /*
      // Update wagmi store state
      const currentState = await wagmiAdapter.appKit.adapter.appKit.getState();
      console.log("currentState", currentState);

      wagmiStore.set({
        state: currentState,
        version: 2
      });
      */
    
      // Handle login
      if (currentRoute == "/" && isConnected) {
        // Note: We don't need to set isLoggedIn manually anymore as it's derived from wagmiStore
        goto('/dashboard', { replaceState: true });
      } else if (currentRoute != "/" && !isConnected) {
        goto('/', { replaceState: true });
      }

      // Handle theme changes
      if (event.type === 'theme_changed') {
        modal.setThemeMode(config.themeMode);
      }
    });

    // Subscribe to modal state changes
    modal.subscribeState(newState => {
      if (newState.open && openCallback !== undefined) {
        const callback = openCallback;
        openCallback = null;

        window.setTimeout(() => {
          callback();
        }, 50);
      }
    });

    /*
    // Initial state check after initialization
    const initialIsConnected = wagmiAdapter.appKit.adapter.appKit.getIsConnectedState();
    if (initialIsConnected) {
      wagmiAdapter.appKit.adapter.appKit.getState().then(initialState => {
        wagmiStore.set({
          state: initialState,
          version: 2
        });
      });
    }
    */
    
    isInitialized = true;
  }
}

// Function to open modal with a specified callback
export function openModalWithCallback(callback) {
  openCallback = callback;
  modal.open();
}

export function checkConnection() {
  if (!browser) return false;
  
  try {
    const wagmiCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('wagmi.store='));
    
    if (!wagmiCookie) return false;
    
    const state = JSON.parse(decodeURIComponent(wagmiCookie.split('=')[1]));
    return state?.state?.connections?.value?.length > 0;
  } catch (error) {
    console.error('Failed to check connection state:', error);
    return false;
  }
}

// Export needed instances and functions
export { modal, wagmiAdapter };