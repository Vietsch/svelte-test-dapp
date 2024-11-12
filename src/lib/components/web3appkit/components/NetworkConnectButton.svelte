<script lang="ts">
  import { modal } from '../appKit';

    let className: $$Props["class"] = undefined;
    export { className as class };

    function openNetworkModal() {
      modal.open({ view: 'Networks' });
    }
  </script>
  
  <button on:click={openNetworkModal} class={`appkit-button ${className}`}>
    <slot></slot>
  </button>
  
  <style>
    /* Add custom styles here if needed */
  </style>
  