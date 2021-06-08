<template>
  <div>
    <container v-slot:default='props'>
      <div>{{ props.user.friend }}</div>
      <div>{{ props.user }}</div>
    </container>
    <hr/>
    <container v-slot='props'>
      <div>{{ props.user.friend }}</div>
      <div>{{ props.user }}</div>
    </container>
    <hr/>
<!--<container v-slot='props'>
      <div>{{ props.user }}</div>
      <template v-slot:other='props'>To avoid scope ambiguity, the default slot should also use
        syntax when there are other named slots.{{ props.user }}
      </template>
    </container>-->

    <div>在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上：</div>
    <div>注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确,只要出现多个插槽，请始终为所有的插槽使用完整的基于 template 的语法：</div>
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
          <slot :user='user'>{{ user.name }}</slot>
<!--          <slot :user='user' name="other">other</slot>-->
        </header>
        </div>
      `
    }
  }
}
</script>

<style scoped>

</style>