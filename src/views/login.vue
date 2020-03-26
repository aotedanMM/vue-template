<template>
<div class="loginContainer">
  <el-input v-model="userName" placeholder="请输入账号"></el-input>
  <el-input v-model="userPsd" type="password" placeholder="请输入密码"></el-input>
  <el-button  type="primary" @click="handleLogin()">登录</el-button>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: 'admin',
      userPsd: '123456'
    }
  },
  methods: {
    handleLogin () {
      console.log(this.userName, this.userPsd)
      localStorage.setItem('userName', this.userName)
      localStorage.setItem('userPsd', this.userPsd)
      this.$router.push({
        name: 'Home',
        path: '/home'
      })
    }

  }
}
</script>

<style scoped>
.loginContainer .el-input{width: 200px;}
</style>
