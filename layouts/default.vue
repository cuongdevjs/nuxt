<template>
  <div>
    <Navbar></Navbar>
    <el-row class="between">
      <div
        :span="3"
        class="menu"
      >
        <Menu />
      </div>
      <el-col class="view">
        <nuxt />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Navbar from './navbar'
import Menu from './menu'
export default {
  components: {
    Navbar, Menu
  },
  transition: 'page'
}
</script>

<style>
</style>
