<!-- BaseButton.svelte -->
<script lang="ts">
    export let onClick;
    
    let className: $$Props["class"] = undefined;
    export { className as class };
    export let disabled = false; 

  </script>
  
  <button on:click={onClick} class={`appkit-button accent ${className}`} disabled={disabled} >
    <slot></slot> <!-- Content from the main button component -->
  </button>
  
  <style>
    .appkit-button {
        /*
        display: flex;
        align-items: center;
        justify-content: space-between;
        */
        text-decoration: none;
        gap: 0.5rem !important;
        border: none;
        background: hsl(var(--active-bg, 0, 0%, 61%));
        cursor: pointer;
        border-radius: var(--border-radius);
        border: 1px solid transparent;
        color: hsl(var(--active, var(--secondary, 0, 0%, 40%)));
        transition: all 0.2s;
        padding: 1rem;
    }

    :global(.appkit-button svg) {
      fill: hsl(var(--active, var(--secondary, 0, 0%, 40%)));
      stroke: hsl(var(--active, var(--secondary, 0, 0%, 40%)));
    }

    :global(.appkit-button:hover svg) {
      fill: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
      stroke: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
    }

    :global(.appkit-button.active svg) {
      fill: hsl(var(--active, var(--secondary, 0, 0%, 40%)));
      stroke: hsl(var(--active, var(--secondary, 0, 0%, 40%)));
    }

    .appkit-button-alt {
      background-color: hsl(var(--background));
      color: hsl(var(--foreground));
    }

    :global(.appkit-button-alt svg) {
      fill: hsl(var(--foreground));
      stroke: hsl(var(--foreground));
    }

    :global(.appkit-button-alt:hover svg) {
      fill: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
      stroke: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
    }

    :global(.appkit-button-alt.active svg) {
      fill: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
      stroke: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
    }

    .appkit-button:hover {
        background-color: hsl(var(--hover-bg, 0, 0%, 5%));
        color: hsl(var(--hover, var(--foreground, 0, 0%, 40%)));
    }

    .appkit-button.active {
        background-color: hsl(var(--active-bg, 0, 0%, 5%));
        color: hsl(var(--active, var(--secondary, 0, 0%, 40%)));
        border-radius: var(--border-radius);
        box-shadow: 1px 2px 3px hsl(var(--shadow));
    }
</style>
  