<script lang="ts">
	import chess from "$lib/assets/about/chess.jpg";
	import About from "./About.svelte";
</script>

<section class="app-container-main">
	<h1>About Me</h1>
	<About
		title="Why Computer Science?"
		passage="Given my inquisitive nature and sense of creativity, I chose to study Computer Science. I believe that this field provides me with the means not only to better understand the technologies I constantly interact with but also to express my ideas as practical applications, addressing real-world challenges."
		imgSrc="about/think.jpg"
	/>

	<article class="w-75 mx-auto d-flex gap-4">
		<div>
			<p>
				I am an inherently curious individual finding great pleasure in understanding the world around me, which has
				fueled my ambition to pursue a career in research and development (R&D). I’m particularly interested in
				simulation engineering and the development of physics engines. As the world increasingly moves toward robotics
				and automation, I believe there is tremendous value in the ability to simulate designs accurately and save
				millions of dollars in operational costs.
			</p>

			<h6><strong>Background</strong></h6>
			<p>
				I was born in Iran and moved to Canada at the age of 14. Coming from a culturally rich background, I have great
				appreciation for arts and have played Persian classical music for nearly 15 years. Being an artist has taught me
				the values of discipline, humility, and commitment to continuous learning in order to achieve meaningful
				outcomes.
			</p>

			<h6><strong>Why Computer Science?</strong></h6>
			<p>
				Given my inquisitive nature and sense of creativity, I chose to study Computer Science. I believe that this
				field provides me with the means not only to better understand the technologies I constantly interact with but
				also to express my ideas as practical applications, addressing real-world challenges.
			</p>
		</div>
		<div>
			<img src={chess} alt="Playing chess" height="350rem" />
			<p>
				Fun fact! I have been playing chess since I was five years old. It is my favourite board game as it does not
				involve dice or card dealing. There's virtually no element of luck, and every loss is a direct result of my own
				decisions.
			</p>
		</div>
	</article>
</section>

<style>
	p {
		text-align: justify;
	}
</style>
