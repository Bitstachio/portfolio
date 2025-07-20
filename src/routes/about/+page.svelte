<script lang="ts">
	import { aboutArticles } from "./about.constants";
	import About from "./About.svelte";
</script>

<section class="app-container-main">
	<h1>About Me</h1>
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
