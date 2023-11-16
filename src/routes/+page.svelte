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

<div class="container">
	<h1>Collected Fictions</h1>

	<ul class="links">
		{#each data.posts as post}
			<div class="post">
				<a href={`blog/${post.slug}`}>{post.title}</a>
				<p class="post-date">{post.date}</p>
			</div>
		{/each}
	</ul>
</div>

<style>
	h1 {
		font-family: 'Urbanist', sans-serif;
		font-size: 3rem;
		margin-left: 1rem;
		margin-bottom: 1.2rem;
	}

	h1:hover,
	.post-date:hover {
		cursor: default;
	}

	a,
	.post-date {
		font-size: 1.1rem;
	}

	a {
		font-family: 'Noto Serif Balinese', serif;
		color: black;
	}

	a:hover {
		color: grey;
	}

	.post {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid black;
		padding: 1em;
		max-width: 90%;
	}

	.post-date {
		font-style: italic;
	}
</style>
