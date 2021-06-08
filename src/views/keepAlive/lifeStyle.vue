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

      mounted() {
        console.log('文章界面mounted')
      },
      activated () {
        console.log('文章界面activated')
      },
      deactivated  () {
        console.log('文章界面deactivated')
      }
    },
    "posts": {
      data: function () {
        return {
          post: '查询界面'
        };
      },
      mounted() {
        console.log(this.post+'mounted')
      },
      activated () {
        console.log(this.post+'activated')
      },
      deactivated  () {
        console.log(this.post+'deactivated')
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