<script lang="ts">
  import { modal } from '../appKit';
  import BaseButton from './BaseButton.svelte';

  export let className: $$Props["class"] = undefined;
  export let variant: 'default' | 'mail' | 'social' | 'wallet' = 'default';
  export let disabled = false; 

  export { className as class };

  function DisconnectModal() {
    modal.adapter?.connectionControllerClient?.disconnect();
  }
</script>

<BaseButton onClick={DisconnectModal} class={`${className}`}  disabled={disabled}>
  <slot></slot>
</BaseButton>
