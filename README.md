# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

Needed additional packages:
```npm install lucide-svelte
npm install mode-watcher
npx  shadcn-svelte@latest init
npm install postcss (unsure if really needed)
```
and of course, tailwind ...

### FOR TOMAS
Hi Tomas,

Brief introduction:

You have one connect button and right top corner a theme toggler.

Switch to dark/light mode is persistent using cookies. The cookies are evaluate in +layout.server.js, and compared with current app settings in the appStore. If they differ, settings in the cookie are updated. Finally, on each settings change, the view mode is set in the client, her using the package modewatcher.

Following the same logic, I use the theme setting (coming from the cookie, sent from the server to the client) to initialize the appKit (modal) in +layout.svelte - onMount.

You can reload the page and the modal`s theme will stay persistently in the view mode chosen.

My intension is to use the same strategy with the web3 connections settings / wagmi settings,

Advantage for me: I can evaluate some rudimentary wagmi properties server side, reading them from the cookie. Especially the connection state, defining if the user is logged in, is nice to have on the server, since I can then redirect all other pages, but the root, back to the root, if not logged in.

I calling the start page while logged would redirect (on the server) to the /dashboard route, as I have no implemented on teh client after connecting.

**Update 2024-11-12:**

I had a look at the source code of wagmi/core and found that cookieToInitialState should do the job I was doing "manually". The initialState is successfully reaching the intializeAppKit funciton. See console.log to check.

Still no reconnection.

**Update 2024-11-12:**

I added reconnect method from @wagmi/core

**Now it works!**
