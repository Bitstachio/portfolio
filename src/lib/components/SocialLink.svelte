<script lang="ts">
	interface Props {
		name: string;
		link: string;
		imgSrc: string;
	}
	let { name, imgSrc, link }: Props = $props();
</script>

<article class="bg-white shadow-lg rounded p-2 app-focusable">
	<a href={link} target="_blank">
		<img src={imgSrc} alt="{name} icon" height="40" />
	</a>
</article>

<style>
	.app-focusable {
		transition: transform 0.3s ease;
	}

	.app-focusable:hover {
		transform: scale(1.03);
		/* Ensures the entire link area responds to hover when padding is applied */
		cursor: pointer;
	}
</style>
