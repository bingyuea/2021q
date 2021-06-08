<template>
  <div>
<!--todo 没看懂-->
    <todo-list :todos="todos">
      <template v-slot:todo="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
<!--        {{todos}}-->
      </template>
    </todo-list>
  </div>

</template>

<script>
export default {
  data(){
    return {
      todos :[
        {
          text: '父组件todo1',
          id: 1
        },
        {
          text: '父组件todo2',
          id: 2
        },
        {
          text: '父组件todo3',
          id: 3
        }
      ]
    }
  },
  components: {
    'todo-list': {
      data() {
        return {
          filteredTodos: [
            {
              text: 'todo1',
              isComplete: true,
              id: 1
            },
            {
              text: 'todo2',
              isComplete: false,
              id: 2
            },
            {
              text: 'todo3',
              isComplete: true,
              id: 3
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
          我们为每个 todo 准备了一个插槽，
          将 \`todo\` 对象作为一个插槽的 prop 传入
          <slot name="todo" :todo="todo">
            后备内容
            {{ todo.text }}
          </slot>
        </li>
        </ul>
      `
    }
  }
}
</script>

<style scoped>

</style>