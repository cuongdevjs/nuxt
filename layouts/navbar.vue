
<template>
  <div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/news/lastest">News</nuxt-link>
    <nuxt-link to="/about/create">Create</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    deliverPage: function() {
      this.$router.replace({ path: '/about/edit/2' })
    }
  }
}
</script>

<style scoped>
</style>
