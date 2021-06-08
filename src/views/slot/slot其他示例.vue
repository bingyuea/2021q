<template>
  <div>

    <todo-list></todo-list>

  </div>

</template>

<script>
export default {
  components: {
    'todo-list': {
      data(){
        return {
          filteredTodos:[
            {
              text:'todo1',
              id:1
            },
            {
              text:'todo2',
              id:2
            },
            {
              text:'todo3',
              id:3
            }
          ]
        }
      },
      template: `
        <ul>
          <li
            v-for="todo in filteredTodos"
            v-bind:key="todo.id"
          >
            {{ todo.text }}
          </li>
        </ul>
      `
    }
  }
}
</script>

<style scoped>

</style>