<template>
  <div id="app">
    <div class="container">
      <div class="left">
        <div v-for = 'router in routers' :key = 'router.title'>
          <router-link :to="router.path" class="menu">{{router.name}}</router-link>
        </div>
      </div>
      <div class="right">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive">
          </router-view>
        </keep-alive>

        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import router from './router'
  export default {
    name:'App',
    computed:{
      routers(){
        return router.options.routes
      }
    },
  }
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

.container {
  display: flex;
  height: 100%;
}
.right {
  flex: 1;
  height: 100%;
  border-left:1px dashed #eee ;
  padding: 10px;
  box-sizing: border-box;
}
.menu{
  display: inline-block;
  margin-bottom:10px ;
}
.left {
  width: 400px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
