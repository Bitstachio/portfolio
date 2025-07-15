<script lang="ts">
	import type { IAboutArticle } from "./about.types";

	let { title, passage, imgSrc, imgAlt, flip }: IAboutArticle = $props();
</script>

<article
	class={`${flip && "flex-row-reverse"} d-flex justify-content-center align-items-center w-75 mx-auto border border-primary border-2 rounded shadow-lg mb-3`}
>
	<div class="p-5">
		<h3>{title}</h3>
		<br />
		<p class="app-text-justify">{passage}</p>
	</div>
	<div class="p-3 bg-primary">
		<img src={imgSrc} alt={imgAlt ?? title} height="300" />
	</div>
</article>
