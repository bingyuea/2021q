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

    <keep-alive :include = 'tabs' exclude="archive">
      <component v-bind:is="currentTab" class="tab"></component>
    </keep-alive>

    <div>
      3.当匹配条件同时在 include 与 exclude 存在时，以 exclude 优先级最高(当前vue 2.4.2 version)。比如：包含于排除同时匹配到了组件A，那组件A不会被缓存。
    </div> <div>
      4.包含在 keep-alive 中，但符合 exclude ，不会调用activated和 deactivated。
    </div>
  </div>
</template>

<script>
export default {
  name: "excludeAndInclude",
  data() {
    return {
      currentTab: "posts",
      tabs: ["posts", "archive"]
    }
  },
  components: {
    "archive": {
      data: function () {
        return {
          archive: '文章界面'
        };
      },
      mounted() {
        console.log('文章界面mounted')
      },
      activated () {
        console.log('文章界面activated')
      },
      deactivated  () {
        console.log('文章界面deactivated')
      },
      template: `<div>{{archive}}
          <input type="text" v-model = 'archive'>
      </div>`,
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