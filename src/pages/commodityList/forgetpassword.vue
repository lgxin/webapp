<template>
  <div class="forget">
    <div>
      <mt-header title="忘记密码">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div>
      <mt-field label="用户名" placeholder="用户名或手机号" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password1"></mt-field>
      <mt-field label="确认密码" placeholder="请输入确认密码" type="password" v-model="password2"></mt-field>
    </div>
    <div class='submit'>
      <mt-button type="primary" @click="submits">提交</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: '',
        password1: '',
        password2: ''
      }
    },
    methods: {
      submits () {
        console.log(this.password1)
        var self = this
        var username = self.username
        var password1 = self.password1
        var password2 = self.password2
        console.log(password1, password2)
        if (username === '') {
          self.$toast('用户名不能为空')
        } else if (password1 !== password2) {
          console.log(password1, password2, 123)
          self.$toast('两次密码不一样')
        } else {
          console.log(username, password1)
          self.$axios.post('/api/users/forgetpassword', {
            password: self.password1,
            username: self.username
          }).then(function (res) {
            console.log(res)
            self.$toast(res.data.CheckDetail)
            self.$router.push('/')
          }).catch(function (res) {
            console.log(res)
          })
        }
      }
    },
    created () {
    },
    watch: {}
  }
</script>
<style>
  .forget {
    width: 100%;
  }

  .forget .mint-header {
    background: #26a2ff;
  }

  .forget input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #333;
  }

  .forget .submit {
    width: 70%;
    margin: 0 auto;
  }

  .submit .mint-button--primary {
    width: 100%;
    height: 35px;
    margin-top: 30px;
  }
  .forget .mint-field{
    border-bottom: 1px solid #ccc;
  }
  .forget .mint-cell-title{
    width:80px;
  }
</style>
