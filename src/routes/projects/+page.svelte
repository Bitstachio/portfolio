<script lang="ts">
	import { tools } from "$lib/components/common/Tool/tool.constants";
	import type { TToolKey } from "$lib/components/common/Tool/tool.types";
	import Project from "./Project.svelte";

	const getTools = (keys: TToolKey[]) => keys.map((key) => tools[key]);
</script>

<section>
	<h1>Projects</h1>

	<section class="container">
		<div class="row">
			<div class="col-12 col-md-6">
				<Project
					title={"Mad Grid"}
					description={["Description #1", "Description #2", "Description #3"]}
					tools={getTools(["java", "androidStudio", "spring", "firebase", "gcp"])}
				/>
			</div>
			<div class="col-12 col-md-6">
				<Project
					title={"Solve Me!"}
					description={["Description #1", "Description #2", "Description #3"]}
					tools={getTools(["javascript", "nodeJS"])}
				/>
			</div>
			<div class="col-12 col-md-6">
				<Project
					title={"Deep Seeker"}
					description={["Description #1", "Description #2", "Description #3"]}
					tools={getTools(["csharp", "unity"])}
				/>
			</div>
			<div class="col-12 col-md-6">
				<Project
					title={"Ampere"}
					description={["Description #1", "Description #2", "Description #3"]}
					tools={getTools(["arduino", "cpp"])}
				/>
			</div>
		</div>
	</section>
</section>
