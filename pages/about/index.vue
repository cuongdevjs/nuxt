<template>
  <div class="">
    <h1>Welcome to NuxtJS framework build UI application!</h1>
    <el-button 
      type="success" 
      icon="el-icon-search" 
      @click="searchBox">Search</el-button>
  </div>
</template>

<script>
import loaddingHelper from '~/assets/script'
export default {
  name: 'Index',
  middleware: 'auth',
  mixins: [loaddingHelper],
  methods: {
    searchBox() {
      this.message200()
    }
  }
}
</script>

<style scoped>
</style>
