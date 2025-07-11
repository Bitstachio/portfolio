<script lang="ts">
	import type { Component } from "svelte";
	import Tool from "$lib/components/common/Tool/Tool.svelte";
	import type { TToolKey } from "$lib/components/common/Tool/tool.types";
	import { tools } from "$lib/components/common/Tool/tool.constants";

	interface Props {
		title: string;
		description: string[];
		toolKeys: TToolKey[];
	};

	let { title, description, toolKeys }: Props = $props();

	const toolProps = toolKeys.map((key) => tools[key]);
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
		{#each toolProps as toolProp}
			<Tool title={toolProp.name} imgSrc={toolProp.imgSrc} />
		{/each}
    </div>
</div>
