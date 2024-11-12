<script lang="ts">
	import ThemeToggle from '$lib/components/ui/ThemeToggle';
	import { onMount } from 'svelte';
	import { WalletConnectButton } from '$lib/components/web3appkit';


	// Redirect to /dashboard if the user is already logged in
	onMount(() => {
	});

</script>

<div class="fullscreen-container">
	<div
		class="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 login-box"
	>
		<div class="absolute right-4 top-4 md:right-8 md:top-8">
			<ThemeToggle />
		</div>

		<div class="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
			<div class="relative z-20 flex items-center text-lg font-medium bg-blend-darken">
			</div>
		</div>
		<div class="lg:p-8">
			<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div class="flex flex-col space-y-4 w-100 text-center">
					<h1 class="text-2xl font-semibold tracking-tight">Startpage</h1>
				</div>

				<WalletConnectButton class="connect">
					Connect
				</WalletConnectButton>
			
			</div>
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
	.fullscreen-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
	}
</style>