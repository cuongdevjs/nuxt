<template>
  <div>
    <el-row>
      <el-col
        :span="4"
        class="menu-2"
      >
        <nuxt-link
          class="item"
          to="/news/lastest"
        >Lastest</nuxt-link>
        <nuxt-link
          class="item"
          to="/news/social"
        >Social</nuxt-link>
        <nuxt-link
          class="item"
          to="/news/company"
        >Company</nuxt-link>
      </el-col>
      <el-col
        :span="20"
        class="main"
      >
        <nuxt-child
          :key="$route.params.index"
          keep-alive
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import loaddingHelper from '~/assets/script'
export default {
  transition: 'slide-left',
  mixins: [loaddingHelper],
  mounted () {
    this.messageCancel()
  }
}
</script>

<style scoped>
</style>
