<script lang="ts">
  import { modal } from '../appKit';
  import BaseButton from './BaseButton.svelte';

  export let className: $$Props["class"] = undefined;
  export let variant: 'default' | 'mail' | 'social' | 'wallet' = 'default';
  export let disabled = false; 

  export { className as class };

  function openConnectModal() {
      modal.open();
  }
</script>

<BaseButton onClick={openConnectModal} class={`${className}`}  disabled={disabled}>
  <slot></slot>
</BaseButton>
