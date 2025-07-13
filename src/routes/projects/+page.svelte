<script lang="ts">
	import Project from "./Project.svelte";
	import {projectConfigs} from "./project.constants";
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
						links={config.links}
					/>
				</div>
			{/each}
		</div>
	</section>
</section>
