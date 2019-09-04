<template>
	<div>
		<PostInput 
			placeholder="New Post"
      :value="newPost"
      @input="newPost = $event"
		/>
    <button @click="addpost">Submit</button>
		<ul v-if="posts.length">
			<PostListItem
				v-for="post in posts"
				:key="post.id"
				:post="post"
				@remove="removePost"
			/>
		</ul>
		<p v-else>
			Make a post
		</p>
	</div>
</template>

<script>
import PostInput from './PostInput.vue'
import PostListItem from './PostListItem.vue'

export default {
	components: {
		PostInput, PostListItem
  },
  props: {
    posts: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      newPost: ''
    }
  },
	methods: {
		addpost () {
			const trimmedText = this.newPost.trim()
			if (trimmedText) {
				this.$emit('newPost', trimmedText)
				this.newPost = ''
			}
		},
		removePost (idToRemove) {
			this.posts = this.posts.filter(post => {
				return post.id !== idToRemove
			})
		}
	}
}
</script>