<template>
  <div>
    <container>
      <template v-slot:header = 'props'>
        <div>{{props.user.friend}}</div>
        <div>{{props.user}}</div>
      </template>
    </container>
    <hr/>
  </div>
</template>

<script>
export default {
  components: {
    'container': {
      data() {
        return {
          user: {
            name: '潘长江',
            friend: '嘎子'
          }
        }
      },
      template: `
        <div>
          <header>
            <slot :user = 'user' name="header">{{user.name}}</slot>
          </header>
        </div>
      `
    }
  }
}
</script>

<style scoped>

</style>