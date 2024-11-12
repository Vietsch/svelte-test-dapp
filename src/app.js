// src/app.js
import { get } from 'svelte/store';
import { appSettings, isLoggedIn } from '$lib/stores/appStore';

export function appInit() {
  console.log("");
  console.log("--------------------------------------------------------------");
  console.log("Client side preprocessing (+layout.svelte -> onMount > app.js)");
  console.log("--------------------------------------------------------------");
  console.log("Executing app-wide initialization...");
  console.log("appSetting",  get(appSettings));
  console.log("isLoggedIn",  get(isLoggedIn));


  

  
    // Add any additional app-wide adjustments here
  }
  