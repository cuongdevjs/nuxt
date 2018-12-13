<template>
  <el-row>
    <p>{{ this.$router.params }}</p>
    <span>Cuong StarFruit</span>
  </el-row>
</template>

<script>
export default {
  name: 'Edit',
  middleware: 'auth'
  // validate({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.id)
  // }
}
</script>

<style scoped>
</style>
