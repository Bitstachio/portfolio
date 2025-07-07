<script>
	import logo from "$lib/assets/logo.png";
</script>

<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
	<div class="container-fluid">
		<div class="d-flex align-items-center gap-2">
			<img src={logo} alt="Logo" height="25rem">
			<a class="navbar-brand" href="#">Barbod Habibi</a>
		</div>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarColor01">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link" href="/static">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About Me</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/experience">Work Experience</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Projects</a>
				</li>
			</ul>
		</div>
	</div>
</nav>