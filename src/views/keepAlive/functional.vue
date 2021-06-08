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
      <component v-bind:is="currentTab" class="tab" post = '查询界面'></component>
    </keep-alive>
    <div>keep-alive 不会在函数式组件中正常工作，因为它们没有缓存实例。</div>
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
      functional:true,
      render(createElement, context) {
        console.log(createElement,context)
        return (
            <div className="posts-tab">
              {context.props.post}
              <input type="text"/>
            </div>
        )
      }
    }
  },
}
</script>

<style>
.selected,.active{
  color: red;
}

</style>