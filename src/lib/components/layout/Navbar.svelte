<script>
	import logo from "$lib/assets/logo.png";
</script>

<nav class="navbar navbar-expand-lg bg-primary sticky-top" data-bs-theme="dark">
	<div class="container-fluid">
		<div class="d-flex align-items-center gap-2">
			<img src={logo} alt="Logo" height="25rem" />
			<h5 class="text-white mb-0 me-3"><strong>Barbod Habibi</strong></h5>
		</div>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarColor01"
			aria-controls="navbarColor01"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarColor01">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About Me</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/experience">Work Experience</a>
				</li>
				<li>
					<a class="nav-link" href="/skills">Skills</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/projects">Projects</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
