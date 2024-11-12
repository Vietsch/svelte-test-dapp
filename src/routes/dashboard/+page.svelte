<script context="module">
	import Icon from '$lib/components/Icons/IconPreview.svelte';
	import ThemeToggle from '$lib/components/ui/ThemeToggle';
	import { onMount } from 'svelte';
	import { DisconnectButton } from '$lib/components/web3appkit';

</script>

<div class="fullscreen-container">
  <div
    class="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 login-box"
  >

    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

        <div class="absolute right-4 top-4 md:right-8 md:top-8">
          <ThemeToggle />
        </div>

        <div class="flex flex-col space-y-4 w-100 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">Dashboard</h1>
        </div>

        <DisconnectButton class="connect">
          Log Out
        </DisconnectButton>

        
        <div class="icon-container">
          <Icon name="save" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="trash" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="preview" width="1rem" height="1rem" fill="black" stroke="black" />
          <Icon name="pdf" width="1rem" height="1rem" fill="black" stroke="black" />
          <Icon name="check" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="error" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="warning" width="1rem" height="1rem" fill="red" stroke="black" />
          <Icon name="login" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="signup" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="binocular" width="1rem" height="1rem" fill="black" stroke="white" />
          <Icon name="magnifier" width="1rem" height="1rem" fill="white" stroke="black" />
          <Icon name="twitter" width="1rem" height="1rem" fill="white" stroke="black" />
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  /* Ensures the icons are displayed in a row */

  .login-box {
		width: 60vw;
		color: hsl(var(--foreground));
		background-color: hsl(var(--secondary-background));
		border: 1px solid hsl(var(--border));
		border-radius: calc(2 * var(--border-radius)) !important;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
		box-shadow: 2px 2px 5px hsl(var(--shadow)), -2px 2px 5px hsl(var(--shadow));
		
	}

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 3rem;
  }

	.fullscreen-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}
</style>
