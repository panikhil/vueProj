<template>
<div id="app">
<ul>
<li v-for="brand in brands" :key='brand.title'>{{brand}}</li>

</ul>

</div>
</template>

<script>
import data from './data.json'

export default{
  el:'#app',
  data(){
    return{
    brands:data.posts
    }
  }
}
</script>

<style>
</style>
