<script lang="ts">
	interface Props {
		title: string;
		imgSrc: string;
		backgroundColor?: string;
		textColor?: string;
	}

	let { title, imgSrc, backgroundColor, textColor }: Props = $props();
</script>

<span
	class="badge rounded-pill"
	style="background-color: {backgroundColor ?? 'var(--bs-primary)'}; color: {textColor ?? 'white'}"
>
	<div class="d-flex gap-1">
		<img src={imgSrc} alt="{title} icon" />
		<p>{title}</p>
	</div>
</span>
