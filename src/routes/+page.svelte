<script>
	import SocialLink from "$lib/components/SocialLink.svelte";
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<section class="banner d-flex flex-column justify-content-center text-center">
	<div class="bg-white bg-opacity-75 p-4 rounded-4 shadow w-75 mx-auto">
		<h1>Hey, I'm Barbod 👋</h1>
		<br />
		<p>
			I'm a 4th-year <strong>Computer Science</strong> student at York University, interested in
			<strong>full-stack development</strong>
			and <strong>physics engine programming</strong>.
		</p>
		<p>
			Currently, I'm working as a Software Engineer at
			<a href="https://kpmpower.com" target="_blank" rel="noopener noreferrer">KPM Power</a>.
		</p>
		<br />
		<div class="d-flex justify-content-center gap-3">
			<SocialLink name="LinkedIn" link="https://www.linkedin.com/in/barbodhabibi/" imgSrc="social/linkedin.png" />
			<SocialLink name="GitHub" link="https://github.com/Bitstachio" imgSrc="social/github.png" />
		</div>
	</div>
</section>

<style>
	.banner {
		background-image: url("/page/home.jpg");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 100vh;
		padding: 4rem 0;
	}
</style>
