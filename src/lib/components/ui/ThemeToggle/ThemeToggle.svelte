<script>
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";
    import { appSettings } from '$lib/stores/appStore';
  
    // Function to toggle the theme and update the app store
    function toggleMode() {
      console.log("ThemeToggler"); 
      appSettings.update(settings => {
        // Toggle between 'light' and 'dark'
        settings.general.theme = settings.general.theme === 'light' ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', settings.general.theme === 'dark'); // Apply the theme class to the HTML root
        return settings;
      });
    }
  
    // Get the current theme from appSettings
    $: currentTheme = $appSettings.general.theme;
  </script>

  <button on:click={toggleMode} class="inline-flex items-center justify-center whitespace-nowrap transition-colors shadow ml-4 control-button">
    <!-- Show Sun icon in light mode, Moon icon in dark mode -->
    <Sun class="absolute rotate-0 transition-all {currentTheme === 'dark' ? 'rotate-90 hidden' : ''}" />
    <Moon class="absolute rotate-90 transition-all {currentTheme === 'dark' ? 'rotate-0 ' : ''} {currentTheme !== 'dark' ? 'hidden' : ''} " />
  </button>
  
  <style>
    .control-button {
      position: relative;
    }
  </style>
  