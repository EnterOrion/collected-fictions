import { posts } from '$lib/data/posts';

export const load = async () => {
	return {
		posts // make posts available on the client
	};
};
