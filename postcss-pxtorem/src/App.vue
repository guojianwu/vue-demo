<template>
  <div id="app">
    <p>{{testCount}}</p>
    <router-view/>
  </div>
</template>

<script>
import {store,mutation } from './store/store'
export default {
  name: 'App',
  computed:{
    testCount(){
      return store.count;
    }
  }
}
</script>

<style>

</style>
