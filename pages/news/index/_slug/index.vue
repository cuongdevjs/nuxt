<template>
  <div>
    <el-row>
      <el-col
        :span="4"
        class="menu-2"
      >
        <nuxt-link
          class="item"
          to="/news/company/577"
        >To 577</nuxt-link>
        <nuxt-link
          class="item"
          to="/news/company/123"
        >To 123</nuxt-link>
        <nuxt-link
          class="item"
          to="/news/company/856"
        >To 856</nuxt-link>
      </el-col>
      <el-col
        :span="20"
        class="main"
      >
        <nuxt-child keep-alive />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
