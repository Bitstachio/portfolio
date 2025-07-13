<script lang="ts">
	import { tools } from "$lib/components/common/Tool/tool.constants";
	import type { TToolKey } from "$lib/components/common/Tool/tool.types";
	import Project from "./Project.svelte";
	import type { IProjectProps } from "./project.types";

	const getTools = (keys: TToolKey[]) => keys.map((key) => tools[key]);
	const projectConfigs: IProjectProps[] = [
		{
			title: "Mad Grid",
			description: ["Description #1", "Description #2", "Description #3"],
			tools: getTools(["java", "androidStudio", "spring", "firebase", "gcp"]),
			linkGitHub: "https://github.com/Bitstachio/mad-grid",
		},
		{
			title: "Solve Me!",
			description: ["Description #1", "Description #2", "Description #3"],
			tools: getTools(["javascript", "nodeJS"]),
			linkGitHub: "https://github.com/Bitstachio/solve-me",
		},
		{
			title: "Ampere",
			description: ["Description #1", "Description #2", "Description #3"],
			tools: getTools(["arduino", "cpp"]),
			linkGitHub: "https://github.com/Bitstachio/ampere",
		},
		{
			title: "Deep Seeker",
			description: ["Description #1", "Description #2", "Description #3"],
			tools: getTools(["csharp", "unity"]),
		},
	];
</script>

<section>
	<h1>Projects</h1>
	<section class="container">
		<div class="row">
			{#each projectConfigs as config (config.title)}
				<div class="col-12 col-md-4">
					<Project
						title={config.title}
						description={config.description}
						tools={config.tools}
						linkGitHub={config.linkGitHub}
					/>
				</div>
			{/each}
		</div>
	</section>
</section>
