<script lang="ts">
	import Tool from "$lib/components/common/Tool/Tool.svelte";
	import type { IToolProps } from "$lib/components/common/Tool/tool.types";

	interface Props {
		title: string;
		description: string[];
		tools: IToolProps[];
		linkGitHub?: string;
	}

	let { title, description, tools, linkGitHub }: Props = $props();
</script>

<div class="card mb-3">
	<div class="card-header d-flex justify-content-between">
		<h3><strong>{title}</strong></h3>
		<div class="d-flex align-items-center gap-3">
            {#if linkGitHub}
                <a href={linkGitHub} target="_blank">
                    <img src="src/lib/assets/dev-icons/github-original.svg" alt="GitHub icon" height="28" />
                </a>
            {/if}
        </div>
    </div>
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
