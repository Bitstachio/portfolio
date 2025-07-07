<script>
	import kpm from "$lib/assets/experience/kpm.png";
	import mccss from "$lib/assets/experience/mccss.png";
	import yorku from "$lib/assets/experience/yorku.png";
</script>

<section class="app-container-main">
	<h1>Work Experience</h1>
	<section class="w-75 mx-auto d-flex flex-column gap-3">
		<article class="app-container-experience">
			<div class="app-container-experience-logo">
				<img src={kpm} alt="KPM Power Logo">
				<p>KPM Power Inc.</p>
				<p>May 2025 - Aug 2025</p>
			</div>
			<div class="app-container-experience-description">
				<h3>Full-stack Developer Intern</h3>
				<ul>
					<li>
						Built and tested features using React, Node.js, Vitest, and Jest to enhance performance and maintainability
						of the system.
					</li>
					<li>
						Developed a dynamic tree view for assemblies in KPM's inventory management software, enabling partial
						refreshes and reducing inventory loading time by 90%.
					</li>
				</ul>
			</div>
		</article>
		<article class="app-container-experience">
			<div class="app-container-experience-logo">
				<img src={mccss} alt="KPM Power Logo">
				<p>Ontario Government</p>
				<p>May 2025 - Aug 2025</p>
			</div>
			<div class="app-container-experience-description">
				<h3>Back-end Developer Intern</h3>
				<ul>
					<li>
						Implemented business logic and developed services for patient record searching and creation using Java,
						Spring Boot, and Oracle Database for a REST API, serving 20+ public health agencies
					</li>
					<li>
						Developed a reporting service, enabling users to view and track the creation and modification of patient
						records for any given day
					</li>
					<li>
						Containerized Angular front-end and Spring Boot back-end with Docker and collaborated with 3 developers to
						create Jenkins CI/CD pipelines, resulting in a 30% reduction in deployment time
					</li>
				</ul>
			</div>
		</article>
		<article class="app-container-experience">
			<div class="app-container-experience-logo">
				<img src={mccss} alt="KPM Power Logo">
				<p>Ontario Government</p>
				<p>May 2025 - Aug 2025</p>
			</div>
			<div class="app-container-experience-description">
				<h3>QA Automation Developer Intern</h3>
				<ul>
					<li>
						Developed a test automation codebase using Java and Selenium, achieving max coverage of the regression suite
						and reducing average regression testing time by 3 business days
					</li>
					<li>
						Implemented a data access layer using JDBC and T-SQL stored procedures for dynamic test data retrieval,
						achieving a 90% reduction in test data preparation time
					</li>
					<li>
						Utilized ApachePOI to automate the creation of Excel reports for documenting test results and reporting bugs
					</li>
				</ul>
			</div>
		</article>
		<article class="app-container-experience">
			<div class="app-container-experience-logo">
				<img src={yorku} alt="KPM Power Logo">
				<p>York University</p>
				<p>May 2025 - Aug 2025</p>
			</div>
			<div class="app-container-experience-description">
				<h3>Research Assistant</h3>
				<ul>
					<li>
						Supervisor: Dr. Sotirios Liaskos
					</li>
					<li>
						Developed a Java-based simulator for evaluating blockchain consensus protocols, focusing on simulating an
						abstracted Bitcoin network and proof-of-work protocol
					</li>
					<li>
						Refactored projects and integrated Maven build, set up mocking dependencies (Mockito and PowerMock) to
						streamline unit testing, and leveraged Lombok to minimize boilerplate code
					</li>
				</ul>
			</div>
		</article>
		<article class="app-container-experience">
			<div class="app-container-experience-logo">
				<img src={yorku} alt="KPM Power Logo">
				<p>York University</p>
				<p>May 2025 - Aug 2025</p>
			</div>
			<div class="app-container-experience-description">
				<h3>Research Assistant</h3>
				<ul>
					<li>
						Supervisor: Dr. Jude Kong
					</li>
					<li>
						Developed a simulator for infectious disease modeling using Python, NetworkX, NumPy, and matplotlib
					</li>
					<li>
						Scraped and cleaned data from 3 million forum messages with BeautifulSoup and pandas for topic modeling
					</li>
				</ul>
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
