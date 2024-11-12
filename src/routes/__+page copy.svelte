<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import ThemeToggle from '$lib/components/ui/ThemeToggle';
	import { WalletConnectButton } from '$lib/components/web3appkit';

	import { onMount } from 'svelte';

	function login() {
		console.log("Login");
	}

	// Redirect to /dashboard if the user is already logged in
	onMount(() => {
	});

</script>

<div
	class="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 login-box"
>
	<div class="absolute right-4 top-4 md:right-8 md:top-8">
		<ThemeToggle />
	</div>

	<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
		<div class="absolute inset-0 bg-cover "></div>
		<div class="relative z-20 flex items-center text-lg font-medium bg-blend-darken">
			<!-- <Command class="mr-2 h-6 w-6" /> -->
		</div>
		<div class="relative z-20 mt-auto">
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-4 w-100 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">home.login-title</h1>
				<p class="text-muted-foreground text-sm w-100 text-justify">
					home.login-title-descr
				</p>
			</div>

			<WalletConnectButton class="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 active-bg text-primary-foreground hover:bg-primary/90 shadow px-4 py-2 h-7 large">
		
				Connect Wallet
		
			</WalletConnectButton>

		</div>
	</div>
</div>


<style>
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
	.login-image {
		background-image: var(--main-bg-image-url);
		-webkit-filter: grayscale(40%) contrast(0.8) brightness(0.8);
		-moz-filter: grayscale(40%) contrast(0.8) brightness(0.8);
		-o-filter: grayscale(40%) contrast(0.8) brightness(0.8);
		-ms-filter: grayscale(40%) contrast(0.8) brightness(0.8);
		filter: grayscale(40%) contrast(0.8) brightness(0.8);
	}
	:global(.citation) {
		background-color: hsla(var(--transparent-background), 0.7);
		padding: 1rem;
		border: 1px solid transparent;
		color: hsl(var(--background));
		border-radius: calc(2 * var(--border-radius)) !important;
	}
</style>