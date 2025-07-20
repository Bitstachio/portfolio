<script>
	import {frameworks, programmingLanguages, tools} from "./skill.constants.js";
	import Skill from "./Skill.svelte";
	import SectionTitle from "$lib/components/layout/SectionTitle.svelte";
</script>

<section class="app-container-main">
	<SectionTitle text="Skills" />
	<section aria-labelledby="heading-programming-language" class="app-bg-white">
		<h2 id="heading-programming-language">Programming Languages</h2>
		<hr>
		<div class="row mt-4">
			{#each programmingLanguages as language (language.name)}
				<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
					<article>
						<Skill name={language.name} iconSrc={language.iconSrc} />
					</article>
				</div>
			{/each}
		</div>
	</section>
	<section aria-labelledby="heading-frameworks" class="app-bg-white">
		<h2 id="heading-frameworks">Frameworks</h2>
		<hr>
		<div class="row mt-4">
			{#each frameworks as framework (framework .name)}
				<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
					<article>
						<Skill name={framework.name} iconSrc={framework.iconSrc} />
					</article>
				</div>
			{/each}
		</div>
	</section>
	<section aria-labelledby="heading-tool" class="app-bg-white">
		<h2 id="heading-tool">Tools</h2>
		<hr>
		<div class="row mt-4">
			{#each tools as tool (tool.name)}
				<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
					<article>
						<Skill name={tool.name} iconSrc={tool.iconSrc} />
					</article>
				</div>
			{/each}
		</div>
	</section>
</section>
