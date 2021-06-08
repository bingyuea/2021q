<template>
  <div>
    <button @click = 'DFS(nodes)'>
      深度有限
    </button>
  </div>
</template>

<script>
export default {
  name: "DFS和BFS",
  data() {
    return {
      nodes: [
        {
          value: 1,
          children: [
            {
              value: 2,
              children: [
                {
                  value: 3,
                  children: [],
                },
                {
                  value: 4,
                  children: [],
                },
              ],
            },
            {
              value: 5,
              children: [],
            },
            {
              value: 6,
              children: [
                {
                  value: 7,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          value: 8,
          children: [
            {
              value: 9,
              children: [],
            },
            {
              value: 10,
              children: [],
            },
          ],
        },
      ]
    }
  },
  methods:{
    DFS(nodes){
      const result = []
      nodes.forEach(item => {
        result.push(item.value)
        const map = data => {
          result.push(data.name)
          if (data.children){
           data.children.forEach(child => map(child))
          }
        }

      })
      console.log(result)
    }
  }
}
</script>

<style scoped>

</style>