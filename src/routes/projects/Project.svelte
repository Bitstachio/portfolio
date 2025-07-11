<script lang="ts">
	import Tool from "$lib/components/common/Tool/Tool.svelte";
	import type { IToolProps } from "$lib/components/common/Tool/tool.types";

	interface Props {
		title: string;
		description: string[];
		tools: IToolProps[];
	};

	let { title, description, tools }: Props = $props();
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
		{#each tools as tool}
			<Tool name={tool.name} imgSrc={tool.imgSrc} />
		{/each}
    </div>
</div>
