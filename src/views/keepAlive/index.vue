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
      template: "<div>文章界面</div>",
    },
    "posts": {
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