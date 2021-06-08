<template>
  <div>
    <div id="container" @mousemove="handleMousemove">{{count}}</div>
  </div>

</template>

<script>
var timer;
export default {
  name: 'Home',
  data(){
    return {
      count:0,
    }
  },
  methods:{
    debounce(fn,delay){
      return function (){
        console.log(timer)
        clearTimeout(timer)
        timer = setTimeout(fn,delay)
      }()
    },
    handleMousemove(){
      this.debounce(this.mousemove,1000)
    },
    mousemove(){
      console.log(this)
      this.count++
    }
  }
}
</script>
<style>
  #container{
    width: 100%; height: 200px; line-height: 200px; text-align: center; color: #fff; background-color: #444; font-size: 30px;
  }
</style>
