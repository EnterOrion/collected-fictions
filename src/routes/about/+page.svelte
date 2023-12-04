<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Serif+Balinese&family=Nunito+Sans:opsz@6..12&family=Roboto&family=Roboto+Mono:wght@200;300;400&family=Urbanist:wght@700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<h1>About</h1>
<p>There's a thousand stories within me and I plan to write them all.</p>

<style>
	h1 {
		font-family: 'Roboto Mono', monospace;
		font-weight: 300;
		font-size: 2.3rem;
		margin-left: 1rem;
		margin-bottom: 0.8rem;
	}

	p {
		margin-top: 0.8rem;
		font-family: 'Noto Serif Balinese', serif;
		margin-left: 3%;
	}

	@media (min-width: 1400px) {
		p {
			margin-left: 0rem;
		}
		h1,
		p {
			min-width: 100%;
			text-align: center;
		}
	}

	@media (max-width: 600px) {
		h1 {
			font-size: 1.4rem;
		}
	}
</style>
