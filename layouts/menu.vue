<template>
  <el-row>
    <div
      v-for="item in listMenu"
      :key="item.path"
      class="center clickable"
    >
      <nuxt-link
        :to="item.path"
        v-show="item.path.split('/').length===2 && item.name != 'index' "
        class="item"
      >{{item.name}}</nuxt-link>
      <nuxt-link
        v-show="item.name === 'index'"
        :to="item.path"
        class="item"
      >
        Home
      </nuxt-link>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
    }
  },
  computed: {
    listMenu () {
      return this.$router.options.routes;
    }
  }
}
</script>

<style>
.item {
  padding: 10px 30px;
  color: white;
}
</style>
