<template>
  <div>

    <button @click="getRes">获取排序结果</button>
    <div>{{ res }}</div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      array: [1, 1, '1', '1'], res: ''
    }
  },
  methods: {
    // 双层循环
    unique() {
      let res = []
      return res
    },
    getRes() {
      this.res = this.unique()
    }
  }
}
</script>

<style scoped>

</style>