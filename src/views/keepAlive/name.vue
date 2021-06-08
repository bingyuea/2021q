<template>
  <div id="dynamic-component-demo">
    <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

    <keep-alive :include="tabs">
      <component v-bind:is="currentTab" class="tab"></component>
    </keep-alive>

    <div>
      keep-alive 先匹配被包含组件的 name 字段，如果 name 不可用，则匹配当前组件 components 配置中的注册名称
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      currentTab: "posts",
      tabs: ["posts", "archive"]
    }
  },
  components: {
    "archive": {
      name:'articles',
      template: "<div>文章界面</div>",
    },
    "posts": {
      name:'query',
      data: function () {
        return {
          post: '查询界面'
        };
      },
      template: `
        <div class="posts-tab">
          <input type="text" v-model = 'post'>
        </div>
      `
    }
  },
}
</script>

<style>
.selected,.active{
  color: red;
}

</style>