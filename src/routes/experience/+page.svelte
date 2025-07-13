<script>
	import kpm from "$lib/assets/experience/kpm.png";
	import mccss from "$lib/assets/experience/mccss.png";
	import yorku from "$lib/assets/experience/yorku.png";
	import WorkExperience from "$lib/components/experience/WorkExperience.svelte";
</script>

<section class="app-container-main">
	<h1>Work Experience</h1>
	<section class="w-75 mx-auto d-flex flex-column gap-3">
		<WorkExperience
			logo={kpm}
			company="KPM Power Inc."
			startMonth="May"
			startYear={2025}
			endMonth="August"
			endYear={2025}
			title="Full-stack Developer Intern"
			description={[
				"Built and tested features using React, Node.js, Vitest, and Jest to enhance performance and maintainability of the system.",
				"Developed a dynamic tree view for assemblies in KPM's inventory management software, enabling partial refreshes and reducing inventory loading time by 90%.",
			]}
		/>
		<WorkExperience
			logo={mccss}
			company="Ontario Government"
			startMonth="May"
			startYear={2024}
			endMonth="August"
			endYear={2024}
			title="Back-stack Developer Intern"
			description={[
				"Implemented business logic and developed services for patient record searching and creation using Java, Spring Boot, and Oracle Database for a REST API, serving 20+ public health agencies",
				"Developed a reporting service, enabling users to view and track the creation and modification of patient records for any given day",
				"Containerized Angular front-end and Spring Boot back-end with Docker and collaborated with 3 developers to create Jenkins CI/CD pipelines, resulting in a 30% reduction in deployment time",
			]}
		/>
		<WorkExperience
			logo={mccss}
			company="Ontario Government"
			startMonth="September"
			startYear={2023}
			endMonth="April"
			endYear={2024}
			title="QA Automation Developer Intern"
			description={[
				"Developed a test automation codebase using Java and Selenium, achieving max coverage of the regression suite and reducing average regression testing time by 3 business days",
				"Implemented a data access layer using JDBC and T-SQL stored procedures for dynamic test data retrieval, achieving a 90% reduction in test data preparation time",
				"Utilized ApachePOI to automate the creation of Excel reports for documenting test results and reporting bugs",
			]}
		/>
		<WorkExperience
			logo={yorku}
			company="York University"
			startMonth="May"
			startYear={2024}
			endMonth="August"
			endYear={2024}
			title="Research Assistant"
			description={[
				"Supervisor: Dr. Sotirios Liaskos",
				"Developed a Java-based simulator for evaluating blockchain consensus protocols, focusing on simulating an abstracted Bitcoin network and proof-of-work protocol",
				"Refactored projects and integrated Maven build, set up mocking dependencies (Mockito and PowerMock) to streamline unit testing, and leveraged Lombok to minimize boilerplate code",
			]}
		/>
		<WorkExperience
			logo={yorku}
			company="York University"
			startMonth="May"
			startYear={2023}
			endMonth="August"
			endYear={2023}
			title="Research Assistant"
			description={[
				"Supervisor: Dr. Jude Kong",
				"Developed a simulator for infectious disease modeling using Python, NetworkX, NumPy, and matplotlib",
				"Scraped and cleaned data from 3 million forum messages with BeautifulSoup and pandas for topic modeling",
			]}
		/>
	</section>
</section>
