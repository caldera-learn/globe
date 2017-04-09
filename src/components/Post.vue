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
				var self = this;
				api.posts().slug(self.slug).then(function(data) {
					console.log(data);
					self.post = data[0];
					return data;
				}).catch(function(err) {
					console.log(err);
				});
			}
		}
	};
</script>