<script lang="ts">
	import Tool from "$lib/components/common/Tool/Tool.svelte";
	import type { IProjectProps } from "./project.types";
	import { projectLinkTypes } from "./project.constants";

	let { title, description, tools, srcImg, links }: IProjectProps = $props();
</script>

<div class="card mb-3">
	<div class="card-header d-flex justify-content-between">
		<h3><strong>{title}</strong></h3>
		<div class="d-flex align-items-center gap-3">
			{#if links}
				{#each links as link (link.address)}
					<a href={link.address} target="_blank">
						<img src={projectLinkTypes[link.type].srcIcon} alt="{link.type} icon" height="28" />
					</a>
				{/each}
			{/if}
		</div>
	</div>
	{#if srcImg}
		<img src={srcImg} alt="{title} image" />
	{/if}
	<div class="card-body pb-0">
		<ul>
			{#each description as bulletPoint, index (`${title}-description-${index}`)}
				<li>{bulletPoint}</li>
			{/each}
		</ul>
	</div>
	<div class="card-footer">
		{#each tools as tool, index (`${title}-tools-${index}`)}
			<Tool name={tool.name} imgSrc={tool.imgSrc} />
		{/each}
	</div>
</div>
