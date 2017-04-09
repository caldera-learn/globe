import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Post from '@/components/Post';
import Posts from '@/components/Posts';

Vue.use(Router);

export default new Router(
	{
		routes: [
			{
				path: '/',
				name: 'Hello',
				component: Hello
			},
			{
				path: '/posts/:slug',
				name: 'post',
				component: Post
			},
			{
				path: '/posts',
				name: 'posts',
				component: Posts
			}

		]
	}
);
