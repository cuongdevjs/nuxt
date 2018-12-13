<template>
  <div class="container">
    <h3>Create About</h3>
  </div>
</template>

<script>
export default {
  name: 'Index',
  middleware: 'auth',
  mounted() {
    this.$myInjectedFunction('test')
  }
}
</script>

<style scoped>
</style>
