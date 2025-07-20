<script lang="ts">
	import Project from "./Project.svelte";
	import { projectConfigs } from "./project.constants";
	import SectionTitle from "$lib/components/layout/SectionTitle.svelte";
</script>

<section class="app-container-main">
	<SectionTitle text="Projects" />
	<section class="container">
		<div class="row">
			{#each projectConfigs as config (config.title)}
				<div class="col-12 col-md-4">
					<Project
						title={config.title}
						description={config.description}
						tools={config.tools}
						srcImg={config.srcImg}
						links={config.links}
					/>
				</div>
			{/each}
		</div>
	</section>
</section>
