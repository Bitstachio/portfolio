<script lang="ts">
	import { aboutArticles } from "./about.constants";
	import About from "./About.svelte";
	import SectionTitle from "$lib/components/layout/SectionTitle.svelte";
</script>

<section class="app-container-main">
	<SectionTitle text="About Me" />
	{#each aboutArticles as article, index (article.title)}
		<About
			title={article.title}
			passage={article.passage}
			imgSrc={article.imgSrc}
			imgAlt={article.imgAlt}
			flip={index % 2 !== 0}
		/>
	{/each}
</section>
