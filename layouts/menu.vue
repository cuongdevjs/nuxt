<template>
  <el-row>
    <div
      v-for="item in listMenu"
      :key="item.path"
      class="center"
    >
      <div
        v-show="item.path.split('/').length===2"
        class="item"
      >{{item.name}}</div>
      <!-- <div v-else>Home</div> -->
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
