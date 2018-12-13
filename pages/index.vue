<template>
  <el-row v-loading="loading">
    <el-row>{{ user }}</el-row>
    <el-row>{{ token }}</el-row>
  </el-row>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>

<script>
import axios from 'axios'
import loaddingHelper from '~/assets/script'
export default {
  mixins: [loaddingHelper],
  async asyncData() {
    let app = {
      email: 'khanhln.c1003j@gmail.com',
      password: 123456
    }
    const data = await axios.post(
      'http://360tovisit.starfruit.com.vn/api/v1/admin/login',
      app
    )
    return {
      user: data.data.user,
      token: data.data.token
    }
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    }
    return {
      tableData: Array(20).fill(item),
      loading: false
    }
  },
  middleware: 'auth'
}
</script>
