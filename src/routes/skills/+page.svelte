<script>
	import { frameworks, programmingLanguages, tools } from "./skill.constants.js";
	import Skill from "./Skill.svelte";
	import SectionTitle from "$lib/components/layout/SectionTitle.svelte";
</script>

<section class="app-container-main">
	<SectionTitle text="Skills" />
	<section aria-labelledby="heading-programming-language" class="app-bg-white">
		<h2 id="heading-programming-language">Soft Skills</h2>
		<hr />
		<div class="row mt-4">
			<div class="col-6 d-flex">
				<article class="bg-white border shadow-lg rounded p-2 w-100 mb-3">
					<h5><strong>Adaptability</strong></h5>
					<p>
						I’m quick to adjust to new environments and challenges. I’m comfortable picking things up on the fly and
						finding my place.
					</p>
				</article>
			</div>
			<div class="col-6 d-flex">
				<article class="bg-white border shadow-lg rounded p-2 w-100 mb-3">
					<h5><strong>Communication</strong></h5>
					<p>
						Having worked as a supplemental instructor and private tutor in math and science, I’ve learned how to
						explain complex ideas in simple ways. I know how to adjust my approach depending on who I’m talking to.
					</p>
				</article>
			</div>
			<div class="col-6 d-flex">
				<article class="bg-white border shadow-lg rounded p-2 w-100">
					<h5><strong>Teamwork</strong></h5>
					<p>
						Leveraging my adaptability and communication skills, I can effectively work in a team. I enjoy working with
						others and know how to be a good team player. I listen, share ideas clearly, and respect different points of
						view.
					</p>
				</article>
			</div>
			<div class="col-6 d-flex">
				<article class="bg-white border shadow-lg rounded p-2 w-100">
					<h5><strong>Critical Thinking</strong></h5>
					<p>
						I like solving problems and thinking things through. I take the time to understand the issue, explore
						different options, and come up with practical solutions.
					</p>
				</article>
			</div>
		</div>
	</section>
	<section aria-labelledby="heading-programming-language" class="app-bg-white">
		<h2 id="heading-programming-language">Programming Languages</h2>
		<hr />
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
		<hr />
		<div class="row mt-4">
			{#each frameworks as framework (framework.name)}
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
		<hr />
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
