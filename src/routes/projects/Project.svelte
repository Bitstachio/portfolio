<script lang="ts">
	import type { Component } from "svelte";
	// import Tool from "$lib/components/common/Tool/Tool.svelte";

	interface Props {
		title: string;
		description: string[];
		// tools: Tool[];
		MyTool: Component;
	};

	let { title, description, /*tools*/ MyTool }: Props = $props();
</script>
<div class="card mb-3">
	<h3 class="card-header">{title}</h3>
	<div class="card-body pb-0">
		<ul>
			{#each description as bulletPoint}
				<li>{bulletPoint}</li>
			{/each}
		</ul>
	</div>
	<div class="card-footer">
		<MyTool />
		<!-- {#each tools as tool}
			{tool}
		{/each} -->
    </div>
</div>
