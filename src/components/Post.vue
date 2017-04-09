<template>
	<article v-bind:id="'post-' + post.id">
		<header>
			<h2 class="post-title">
				{{post.title.rendered}}
			</h2>
		</header>
		<div class="entry-content" v-html="post.content.rendered"></div>
	</article>
</template>

<script>
	import api from '../api.js';
	export default {
		created: function () {
			this.slug = this.$route.params.slug;
			this.wp();
		},
		mounted: function () {

		},
		data () {
			return {
				slug: String,
				post: Array
			};
		},
		methods: {
			wp: function () {
				api.posts().slug(self.slug).then( data => {
					console.log(data);
					this.post = data[0];
					return data;
				}, err => {
					console.log(err);
				});
			}
		}
	};
</script>