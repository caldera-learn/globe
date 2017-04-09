<template>
	<div>
		<div v-for="post in posts">
			<article v-bind:id="'post-' + post.id">
				<header>
					<h2 class="post-title">
						{{post.title.rendered}}
					</h2>
				</header>
				<div class="entry-content" v-html="post.content.excerpt"></div>
				<router-link :to="'/posts/' + post.slug">Read More</router-link>
			</article>
		</div>
	</div>
</template>

<script>
	import api from '../api.js';
	export default {
		created: function () {
			this.page = this.$route.params.page;
			this.wp();
		},
		mounted: function () {

		},
		data () {
			return {
				page: 1,
				posts: Array
			};
		},
		methods: {
			wp: function () {
				var self = this;
				api.posts().page(self.page).then(function(data) {
					console.log(data);
					self.posts = data;
					return data;
				}).catch(function(err) {
					console.log(err);
				});
			}
		}
	};
</script>