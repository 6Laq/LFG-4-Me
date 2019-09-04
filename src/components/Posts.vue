<template>
	<div>
		<PostInput 
			v-model="newTodoText"
			placeholder="New todo"
			@keydown.enter="addTodo"
		/>
		<ul v-if="todos.length">
			<PostListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
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

let nextTodoId = 1

export default {
	components: {
		PostInput, PostListItem
	},
  data () {
    return {
			newTodoText: '',
      todos: [
				{
					id: nextTodoId++,
					text: 'Learn Firebase'
				},
				{
					id: nextTodoId++,
					text: 'Remove Firebase'
				},
				{
					id: nextTodoId++,
					text: 'Post list'
				}
			]
    }
  },
	methods: {
		addTodo () {
			const trimmedText = this.newTodoText.trim()
			if (trimmedText) {
				this.todos.push({
					id: nextTodoId++,
					text: trimmedText
				})
				this.newTodoText = ''
			}
		},
		removeTodo (idToRemove) {
			this.todos = this.todos.filter(todo => {
				return todo.id !== idToRemove
			})
		}
	}
}
</script>