<template>
  <div>
    <container>
      <template #header>
        <h1>header</h1>

      </template>

      <p>default</p>
      <p>default2</p>

      <template #footer>
        <p>footer</p>
      </template>


    </container>
    <hr/>
    <div>v-slot:header 可以被重写为 #header</div>
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