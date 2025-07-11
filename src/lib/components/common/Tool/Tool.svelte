<script lang="ts">
	import { toolIconHeight } from "./tool.constants";

	interface Props {
		name: string;
		imgSrc: string;
		backgroundColor?: string;
		textColor?: string;
	}

	let { name, imgSrc, backgroundColor, textColor }: Props = $props();
</script>

<span
	class="badge rounded-pill"
	style="background-color: {backgroundColor ?? 'var(--bs-primary)'}; color: {textColor ?? 'white'}"
>
	<div class="d-flex align-items-center gap-1">
		<img src={imgSrc} alt="" height={toolIconHeight} />
		<p class="mb-0">{name}</p>
	</div>
</span>
