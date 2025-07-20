<script lang="ts">
	import type { INamedIcon } from "$lib/types";

	let { name, iconSrc }: INamedIcon = $props();
</script>

<article class="card text-center border-0 shadow py-2">
	<img src={iconSrc} alt="{name} icon" class="card-img-top mx-auto" height="40" />
	<div class="card-body p-0 mt-3">
		<h6 class="card-title mb-0 text-truncate">{name}</h6>
	</div>
</article>
