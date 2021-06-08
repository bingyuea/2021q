<template>
  <div>
    <div id="container" @mousemove="handleMousemove">{{ count }}</div>
    <md></md>
  </div>

</template>

<script>
// var pre =  0;
// var args;
// var context;
var timer;
import md from './index.md'

export default {
  name: 'Home',
  components: {
    md
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    /*throttle(fn,delay){
      context =  this
      args = arguments
      return function (){
        let now = +new Date()
        if (now - pre  > delay){
          fn.apply(context,args)
          pre = now
        }
      }()
    },*/

    throttle(fn, delay) {
      return function () {
        // eslint-disable-next-line no-debugger
        if (!timer) {
          console.log(new Date().getSeconds())
          timer = setTimeout(function () {
            fn()
            clearTimeout(timer)
            timer = null
          }, delay)
        }
      }()
    },
    handleMousemove() {
      this.throttle(this.mousemove, 1000)
    },
    mousemove() {
      this.count++
    }
  }
}
</script>
<style>
#container {
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  background-color: #444;
  font-size: 30px;
}
</style>
