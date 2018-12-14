<template>
  <div v-loading="loading">
    <el-row
      class="between"
      :gutter="21"
    >
      <el-col :span="12">{{ user }}</el-col>
      <el-col :span="12">{{ token }}</el-col>
    </el-row>
  </div>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  mixins: [loaddingHelper],
  methods: {
    ...mapActions(['setLoading', 'setStopLoading'])
  },
  data () {
    return {
      token: '',
      user: ''
    }
  },
  middleware: 'auth',
  async mounted () {
    console.log(this.$router.options.routes)
    let app = {
      email: 'khanhln.c1003j@gmail.com',
      password: 123456
    }
    await this.setLoading()
    const data = await axios.post(
      'http://360tovisit.starfruit.com.vn/api/v1/admin/login',
      app
    )
    await this.setStopLoading()
    this.user = data.data.user
    this.token = data.data.token
  },
  computed: {
    ...mapGetters(['loading']),
  }
}
</script>
