<template>
  <div>
    <h2>This is news 360</h2>
    <nuxt-link to="/news/lastest">Lastest</nuxt-link>
    <nuxt-link to="/news/social">Social</nuxt-link>
    <nuxt-link to="/news/company">Company</nuxt-link>
    <div class="main">
      <nuxt-child 
        :key="$route.params.index" 
        keep-alive/>
    </div>
  </div>
</template>

<script>
import loaddingHelper from '~/assets/script'
export default {
  transition: 'slide-left',
  mixins: [loaddingHelper],
  mounted() {
    this.messageCancel()
  }
}
</script>

<style scoped>
</style>
