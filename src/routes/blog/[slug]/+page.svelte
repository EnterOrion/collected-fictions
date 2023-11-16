<script>
	export let data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Serif+Balinese&family=Nunito+Sans:opsz@6..12&family=Urbanist:wght@700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div>
	<article>
		<header>
			<h1>{data.post.title}</h1>
		</header>
		<!-- render the post -->
		<div class="post-body">
			<svelte:component this={data.component} />
		</div>
	</article>
</div>

<style>
	div {
		font-family: 'Noto Serif Balinese', serif;
	}

	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 2.5rem;
		text-align: center;
	}

	.post-body {
		max-width: 85%;
		margin: 0 auto;
	}
</style>
