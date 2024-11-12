<script context="module">
	import Icon from '$lib/components/Icons/IconPreview.svelte';

</script>

<br><br><center><b>hello world</b><br><br>
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
</center> 


<style>
  /* Ensures the icons are displayed in a row */
  .icon-container {
      display: inline-flex;
      gap: 0.5rem; /* Add spacing between icons if needed */
      align-items: center;
  }
</style>
