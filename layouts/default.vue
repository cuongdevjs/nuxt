<template>
  <div>
    <Navbar />
    <!-- <transition name="el-fade-in-linear"> -->
    <nuxt/>
    <!-- </transition> -->
  </div>
</template>
<script>
import Navbar from './navbar'
export default {
  components: {
    Navbar
  },
  transition: 'page'
}
</script>

<style>
</style>
