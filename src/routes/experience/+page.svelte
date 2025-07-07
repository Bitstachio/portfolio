<script>
	import kpm from "$lib/assets/experience/kpm.png";
</script>

<section class="app-container-main">
	<h1>Work Experience</h1>
	<section class="w-75 mx-auto">
		<article class="app-container-experience">
			<div class="app-container-experience-logo">
				<img src={kpm} alt="KPM Power Logo">
				<p>KPM Power Inc.</p>
				<p>May 2025 - Aug 2025</p>
			</div>
			<div>
				<h3>Full-stack Developer Intern</h3>
				<p>
					At KPM Power, I work as a full-stack developer on their in-house inventory software. Since the team is smaller
					than in my previous role, I’ve had more freedom to design features and take part in the full development
					process—from the initial client request all the way to deployment. I primarily use the MERN stack and
					contribute to a GitHub Actions CI/CD pipeline that helps us ship updates quickly and reliably. The role has
					given me the chance to take on more responsibility and be involved in both the technical and collaborative
					sides of building software.
				</p>
			</div>
		</article>
	</section>
</section>

<style lang="scss">
  .app-container-experience {
    display: flex;
    gap: 2rem;

		.app-container-experience-logo {
			display: flex;
			flex-direction: column;
			align-items: center;

			img {
				height: 10rem;
				margin-bottom: 1rem;
			}

			p {
				line-height: 0.5rem;
			}

			p:first-of-type {
				font-weight: bold;
      }
		}
  }
</style>
