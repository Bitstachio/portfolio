<script lang="ts">
	import "bootswatch/dist/flatly/bootstrap.min.css";
	import "$lib/styles/global.scss";
	import "$lib/styles/bootstrap-extension.scss";
	import Navbar from "$lib/components/layout/Navbar.svelte";
</script>

<Navbar />
<slot />
