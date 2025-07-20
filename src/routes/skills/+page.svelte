<script>
	import {frameworks, programmingLanguages, tools} from "./skill.constants.js";
	import Skill from "./Skill.svelte";
</script>

<section class="app-container-main">
	<h1>Skills</h1>
	<section aria-labelledby="heading-programming-language">
		<h2 id="heading-programming-language">Programming Languages</h2>
		<div class="row mt-5">
			{#each programmingLanguages as language (language.name)}
				<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
					<article>
						<Skill name={language.name} iconSrc={language.iconSrc} />
					</article>
				</div>
			{/each}
		</div>
	</section>
	<section aria-labelledby="heading-frameworks">
		<h2 id="heading-frameworks">Frameworks</h2>
		<div class="row mt-5">
			{#each frameworks as framework (framework .name)}
				<div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
					<article>
						<Skill name={framework.name} iconSrc={framework.iconSrc} />
					</article>
				</div>
			{/each}
		</div>
	</section>
	<section aria-labelledby="heading-tool">
		<h2 id="heading-tool">Tools</h2>
		<div class="row mt-5">
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
