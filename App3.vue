<template>
<div id="app">

<select v-model="selected">
<option disabled value="">Choose a fruit</option>
<option>Apple</option>
<option>Banana</option>
<option>Mango</option>
<option>Strawberry</option>
</select>

<span>Fruit Chosen {{selected}}</span>

<div v-for="currency in info" :key="currency.name">{{currency.first_name}}
<p v-show="currency.first_name ==='Marcus'">first_name <mark>{{ currency.first_name }}</mark></p>
</div>
</div>

</template>

<script>
import axios from 'axios'

export default{
  el:'#app',
  data(){
    return{
      info:null,
      selected:""
    }
  },
  mounted(){
    axios.get('http://localhost:5050/users')
    .then(response=>{this.info=response.data})

    console.log(this.info)
  }
}
</script>

<style>
</style>





