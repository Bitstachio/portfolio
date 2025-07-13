<script lang="ts">
	import type { TMonth } from "$lib/types";

	interface Props {
		logo: string;
		company: string;
		startMonth: TMonth;
		startYear: number;
		endMonth: TMonth;
		endYear: number;
		title: string;
		description: string[];
	}

	let { logo, company, startMonth, startYear, endMonth, endYear, title, description }: Props = $props();
</script>

<article class="d-flex gap-5">
	<div class="d-flex flex-column align-items-center">
		<img src={logo} alt={`${company} Logo`} height="160rem" class="mb-3" />
		<p class="lh-1"><strong>{company}</strong></p>
		<p class="lh-1">{startMonth.slice(0, 3)} {startYear} - {endMonth.slice(0, 3)} {endYear}</p>
	</div>
	<div>
		<h3>{title}</h3>
		<ul>
			{#each description as item, index (`${company}-${title}-${startMonth}-${startYear}-${index}`)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</article>
