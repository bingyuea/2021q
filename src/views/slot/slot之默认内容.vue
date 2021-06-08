<template>
  <div>

    <div>
      <v-navigation url="/slot/slot">
<!--        如果这里有值的话，会替换掉后备内容-->
      </v-navigation>
    </div>

    <div>
      官方叫后备内容
    </div>

  </div>

</template>

<script>
export default {
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
          <slot>后备内容</slot>
        </a>
      `
    }
  }
}
</script>

<style scoped>

</style>