<template>
  <div>

    <div>
      <v-navigation url="/slot/slot">
        Your Profile{{url}}
      </v-navigation>
    </div>


    <div>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      url:'11111'
    }
  },
  components: {
    'v-navigation': {
      name: 'v-navigation',
      props: {
        url: ''
      },
      template: `
        <a
            :href="url"
            class="nav-link"
        >
          <slot></slot>
        </a>
      `
    }
  }
}
</script>

<style scoped>

</style>