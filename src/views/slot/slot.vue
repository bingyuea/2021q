<template>
  <div>

    <div>
      <v-navigation url="/slot/slot">
        Your Profile
      </v-navigation>
    </div>

    <div>
      <v-navigation url="/slot/slot">
        <span class="fa fa-user">2</span>
        Your Profile2
      </v-navigation>
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
          <slot></slot>
        </a>
      `
    }
  }
}
</script>

<style scoped>

</style>