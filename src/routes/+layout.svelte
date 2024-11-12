<script lang="ts">
    export let data;
    
    import '../app.css';
    import '../styles/styles.scss';
    import { ModeWatcher } from "mode-watcher";
    import { onMount } from 'svelte';
    import { initializeAppKit, wagmiAdapter, modal } from '$lib/components/web3appkit/appKit'; 
    import { appInit } from '../app'; // Import appInit from src/app.js
    import { get } from 'svelte/store';
    import { isLoggedIn, appSettings } from '$lib/stores/appStore';
    import { page } from '$app/stores';
    
    // Update `currentRoute` in appSettings whenever the page changes
    $: appSettings.update(settings => {
    settings.general.currentRoute = '/' + $page.url.pathname.split('/')[1];
    return settings;
    });
    
    onMount(async () => {
        // Run appInit after the DOM is ready
        const { generalSettings, cssVariables, projectConfig, wagmiState } = data;
    
        console.log("");
        console.log("----------------------------------------");
        console.log("Client side initialization (+layout.svelte -> onMount)");
        console.log("----------------------------------------");
    
        console.log("generalSettings", generalSettings);
        console.log("cssVariables", cssVariables);
        console.log("projectConfig", projectConfig);
        console.log("wagmiState", wagmiState);
    
    
        console.log("wagmiAdapter", wagmiAdapter ? wagmiAdapter : {});
        console.log("wagmiAdapter.getIsConnectedState", wagmiAdapter ? wagmiAdapter.appKit.getIsConnectedState() : false);
        /*
        if (wagmiState) {
            wagmiStore.set(data.wagmiState);
        }
        */
    
        console.log("isLoggedIn", get(isLoggedIn));
    
        const appKitConfig = {
            themeMode: generalSettings.theme,
            projectId: projectConfig.projectId,
            metaData: {
                name: 'TwinX Testnet dApp',
                description: 'This is a virtual test asset tokenized in a TwinX ecosystem on Ethereum testnet.',
                url: 'https://block-esteate.io',
                icons: ['https://myapp.com/icon.png'],
            },
            themeVariables: {
                '--w3m-color-mix': 'hsl(' + cssVariables['--background'] + ')',
                '--w3m-border-radius-master': 'calc(0.2 * ' + cssVariables['--border-radius'] + ')'
            }
        };
    
    
        try {
            await initializeAppKit(appKitConfig, wagmiState);
            // Store references if needed
        } catch (error) {
            console.error('Failed to initialize AppKit:', error);
        }
    
        appInit();
    
    });
    
    </script>
    
    <div class="centered">
        <ModeWatcher />
        <slot />
    </div>
    
    <style>
        html, body {
            height: 100%; /* Ensure the parent containers fill the page */
            margin: 0;
        }
        .centered {
            display: grid;
            place-items: center;
            height: 100vh;
            background-color: hsl(var(--background));
        }
    </style>