<script>
	export let data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato&family=Noto+Serif+Balinese&family=Nunito+Sans:opsz@6..12&family=Roboto&family=Roboto+Mono:wght@200;300;400&family=Urbanist:wght@700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="container">
	<div class="header-container">
		<h1>Collected Fictions</h1>
		<h2><a href="about">About</a></h2>
	</div>

	<div class="post-container">
		{#each data.posts as post}
			<div class="post">
				<a href={`blog/${post.slug}`}>{post.title}</a>
				<p class="post-date">Published: {post.date}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.header-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	h1 {
		font-family: 'Roboto Mono', monospace;
		font-size: 2.5rem;
		margin-left: 1rem;
		margin-bottom: 1.2rem;
		font-weight: 300;
	}

	h2 {
		font-family: 'Roboto Mono', monospace;
		font-size: 1.5rem;
		margin-right: 4%;
		font-weight: 300;
		margin-bottom: 1.2rem;
	}

	h1:hover,
	.post-date:hover {
		cursor: default;
	}

	h2:hover {
		cursor: pointer;
		text-decoration: underline;
		color: grey;
	}

	h2 a {
		color: black;
		text-decoration: none;
	}

	.post a,
	.post-date {
		text-decoration: none;
		font-size: 1.1rem;
	}

	.post a {
		font-family: 'Noto Serif Balinese', serif;
		color: black;
	}

	a:hover {
		color: grey;
		text-decoration: underline;
	}

	.post {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid black;
		padding: 1em;
		max-width: 95%;
		margin-bottom: 1.5rem;
	}

	.post-date {
		font-style: italic;
	}

	.post-container {
		margin-top: 1.2rem;
		padding-left: 3%;
	}
</style>
