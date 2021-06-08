<template>
  <div>
    <input type="text" v-model="name">
    <p>{{ name }}</p>
    <hr/>


    <input type="text" :value="name2" @input="name2=$event.target.value">
    <p>{{name2}}</p>
    <hr/>


    {{name3}}
    <test @input ='(val) => name3 = val'></test>
    <hr/>

  </div>
</template>

<script>
export default {
  name: "model",
  data() {
    return {
      name: '',
      name2: '',
      name3: '',
      name4: '333333'
    }
  },
  components:{
    test:{
      data(){
        return {
          value:''
        }
      },
      template:`
         <input type="text" :value="value" @input="$emit('input',$event.target.value)">
      `
    },
  }

}
</script>

<style scoped>

</style>