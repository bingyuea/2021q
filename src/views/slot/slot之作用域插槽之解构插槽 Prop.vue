<template>
  <div>
    <container>
      <template v-slot:header = 'props'>
        <div>默认{{props.user}}</div>
      </template>
    </container>
    <hr/>
    <container>
      <template v-slot:header = '{user}'>
        <div>解构{{user}}</div>
      </template>
    </container>
    <hr/>
    <container>
      <template v-slot:header = '{user:props}'>
        <div> prop 重命名{{props}}</div>
      </template>
    </container>
    <hr/>
    <container>
      <template v-slot:foot = '{user ={event:"潘噶之交"}}'>
        <div> prop 定义后备内容，用于插槽 prop 是 undefined 的情形{{user}}</div>
      </template>
    </container>
    <hr/>
    <container>
      <template #foot = '{user ={event:"潘噶之交"}}'>
        <div>解构具名插槽缩写</div>
        <div> prop 定义后备内容，用于插槽 prop 是 undefined 的情形{{user}}</div>
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
            friend: '嘎子',
            event: undefined
          }
        }
      },
      template: `
        <div>
          <header>
            <slot :user = 'user' name="header">{{user.name}}</slot>
            <slot  name="foot">{{user.name}}</slot>
          </header>
        </div>
      `
    }
  }
}
</script>

<style scoped>

</style>