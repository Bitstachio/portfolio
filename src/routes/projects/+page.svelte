<script>
	import Tool from "$lib/components/common/Tool/Tool.svelte";
	import JavaScript from "$lib/components/common/Tool/tools/JavaScript.svelte";
	import Project from "./Project.svelte";
</script>

<section>
	<h1>Projects</h1>

	<article>
		<div class="d-flex">
			<h5><strong>Solve Me!</strong></h5>
			<a href="https://github.com/bitstachio/solve-me">GitHub</a>
			<!-- Replace with GitHub icon -->
		</div>
		<ul>
			<li>Bullet point #1</li>
			<li>Bullet point #2</li>
			<li>Bullet point #3</li>
		</ul>
		<section>
			<!-- Skills container -->
			<Tool title="JavaScript" imgSrc="" backgroundColor="yellow" />
			<Tool title="Node.js" imgSrc="" backgroundColor="yellow" />
		</section>
	</article>

	<section class="container">
		<div class="row">
			<div class="col-12 col-sm-6 col-md-3">
				<Project
					title={"Solve Me!"}
					description={["Description #1", "Description #2", "Description #3"]}
					toolKeys={["javascript", "nodejs"]}
				/>
			</div>
			<div class="col-12 col-sm-6 col-md-3">Item 2</div>
			<div class="col-12 col-sm-6 col-md-3">Item 3</div>
			<div class="col-12 col-sm-6 col-md-3">Item 4</div>
			<div class="col-12 col-sm-6 col-md-3">Item 5</div>
		</div>
	</section>
</section>
