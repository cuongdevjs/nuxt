
<template>
  <el-container class="navbar">
    <el-row :gutter="21">
      <div class="between">
        <el-col :span="14">
          <div class="left">
            <el-col :span="5">
              <img
                src="../static/logo2.png"
                alt=""
                width="100%"
                height="100%"
              >
            </el-col>
            <el-col :span="15">
              <el-input
                placeholder="Please input"
                v-model="input"
              ></el-input>
            </el-col>
          </div>
        </el-col>
        <el-col :span="10">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
          >
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-submenu index="2">
              <template slot="title">Workspace</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item
              index="3"
              disabled
            >Info</el-menu-item>
            <el-menu-item index="4"><a
                href="https://www.ele.me"
                target="_blank"
              >Orders</a></el-menu-item>
          </el-menu>
        </el-col>
      </div>
    </el-row>
  </el-container>
</template>
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activeIndex: '1',
      input: ''
    }
  },
  methods: {
    deliverPage: function () {
      this.$router.replace({ path: '/about/edit/2' })
    }
  }
}
</script>

<style scoped>
</style>
