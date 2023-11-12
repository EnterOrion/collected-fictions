<script>
	export let data;
</script>

<h1>Collected Fictions</h1>
<main>
	{#each data.posts as post (post.slug)}
		<div class="post">
			<a href={`/posts/${post.slug}`}>
				<h2>
					{post.title}
				</h2>
				<p class="post-synopsis">{post.synopsis}</p>
				<p class="post-date">{post.date}</p>
			</a>
		</div>
	{/each}
</main>

<style>
	:global(body) {
		background-color: rgb(246, 245, 241);
	}

	main {
		padding-left: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		text-decoration: underline;
		margin-left: 1rem;
		cursor: default;
	}

	h2 {
		font-size: 1.5rem;
	}

	a {
		text-decoration: none;
		color: black;
	}

	.post a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid black;
		padding-left: 1rem;
		padding-right: 1rem;
		max-width: 90%;
		border-radius: 2px;
	}

	.post a:hover {
		background-color: rgb(255, 242, 242);
		border: 1px solid rgb(106, 106, 106);
		cursor: pointer;
	}

	.post-synopsis {
		font-style: italic;
		margin-right: 25%;
	}

	.post-date {
		font-weight: bold;
		font-size: 1.2rem;
	}
</style>
