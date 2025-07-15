<script lang="ts">
	interface Props {
		title: string;
		passage: string;
		imgSrc: string;
		imgAlt?: string;
	}

	let { title, passage, imgSrc, imgAlt }: Props = $props();
</script>

<article
	class="d-flex justify-content-center align-items-center w-75 mx-auto border border-primary border-2 rounded shadow-lg"
>
	<div class="p-5">
		<h3>{title}</h3>
		<br />
		<p>{passage}</p>
	</div>
	<div class="p-3 bg-primary">
		<img src={imgSrc} alt={imgAlt ?? title} height="300" />
	</div>
</article>
