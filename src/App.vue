<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/navigationBar.vue'

export default {
  name: 'App',
  components: {
    'nav-bar':NavBar
  }
}
</script>

<!-- global styles -->
<style>
body {
  background-color: #1a1a1a;
  color: #fff;
  font-family: Arial, sans-serif;
}
</style>
