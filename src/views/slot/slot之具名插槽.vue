<template>
  <div>
    <container>
      <template v-slot:header>
        <h1>header</h1>

      </template>

      <p>default</p>
      <p>default</p>

      <template v-slot:footer>
        <p>footer</p>
      </template>


    </container>
    <hr/>
    <h1>在向具名插槽提供内容的时候，我们可以在一个 template 元素上使用 v-slot 指令，并以 v-slot 的参数的形式提供其名称</h1>
    <div>一个不带 name 的 slot 出口会带有隐含的名字“default”,也可以v-slot:default</div>
    <div>注意 v-slot 只能添加在 template 上 (只有一种例外情况)</div>
  </div>
</template>

<script>
export default {
  components: {
    'container': {
      template: `
        <div>
          <header>
            <slot name="header"></slot>
          </header>
          <main>
            <slot></slot>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      `
    }
  }
}
</script>

<style scoped>

</style>