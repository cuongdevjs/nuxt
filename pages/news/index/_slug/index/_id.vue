<template>
  <div>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  name: 'new-id',
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

<style scoped>
</style>
