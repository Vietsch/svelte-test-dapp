<script lang="ts">
import '../../app.css';
import '../../styles/styles.scss';
</script>

<div class="background-image"></div> 

<div class="flex h-screen z-50 main-container">
	<!-- Sidebar on the left, full height -->
	<!-- Main content area: Top menu as header, main content below -->
	<div class="flex flex-col flex-grow">
	  <!-- Top menu as the header -->
  
	  <!-- Main content area below the top menu -->
	  <div class="main-content flex-grow p-4 overflow-auto">
		<slot />
	  </div>
	</div>
  </div>

<style>
	.main-container {
		z-index: 10;
		position: fixed;
		left: 0;
		right: 0;
		height: 100vh;
		width: 100vw;
	}
	.main-content {
		flex-grow: 1; /* Take up the remaining space below the top menu */
		background-color: hsl(var(--background));
	}
</style>