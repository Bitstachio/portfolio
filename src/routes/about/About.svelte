<script lang="ts">
	import type { IAboutArticle } from "./about.types";

	let { title, passage, imgSrc, imgAlt, flip }: IAboutArticle = $props();
</script>

<article class="container shadow-lg rounded my-4 p-3 bg-white bsx-bg-opacity-90">
	<div class={`row align-items-center g-4 ${flip ? 'flex-row-reverse' : ''}`}>
		<div class="col-md-6">
			<img src={imgSrc} alt={imgAlt ?? title} class="img-fluid rounded shadow-sm" />
		</div>
		<div class="col-md-6">
			<h3 class="mb-3">{title}</h3>
			<p class="text-muted">{passage}</p>
		</div>
	</div>
</article>

<style>
	img {
		transition: transform 0.3s ease;
	}

	img:hover {
		transform: scale(1.03);
	}
</style>
