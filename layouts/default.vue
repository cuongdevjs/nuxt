<template>
  <div>
    <Navbar></Navbar>
    <el-row>
      <el-col
        :span="4"
        class="menu"
      >
        <Menu />
      </el-col>
      <el-col
        :span="20"
        class="view"
      >
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
