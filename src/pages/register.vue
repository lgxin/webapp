<template>
  <div class="register">
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
    <div class="textinput">

      <div><span class="iconfont icon-shouji"></span><input type="text" placeholder="请输入你的手机号" v-model="userTel"></div>
      <div><span class="iconfont icon-mima"></span><input type="password" placeholder="填写密码" v-model="userPassWord">
      </div>
      <div><span class="iconfont icon-huiyuan"></span><input type="password" placeholder="支付密码" v-model="userPayPass">
      </div>
      <div><span class="iconfont icon-code"></span><input type="text" placeholder="请输入手机验证码" v-model="verificationCode">
      </div>
    </div>
    <div>
      <mt-checklist
        v-model="checklist"
        :options="options">
      </mt-checklist>
    </div>
    <div class="button">
      <mt-button :radius="80" @click.native="handleClick">注册</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        checklist: [],
        options: [
          {
            label: '请阅读并接受注册协议',
            value: true,
            disabled: false
          }
        ],
        userTel: '', // 用户手机号
        userPassWord: '', // 用户密码
        userPayPass: '', // 用户支付密码
        verificationCode: '' // 验证码
      }
    },
    mounted () {
    },
    methods: {
      handleClick () {
        let self = this
        console.log(self.checklist[0])
        if (self.checklist[0] !== true) {
          self.$toast('请选择接受注册协议')
        } else if (self.userTel === '') {
          self.$toast('手机号码不能为空')
        } else if (self.userPassWord === '') {
          self.$toast('用户密码不能为空')
        } else if (self.userPayPass === '') {
          self.$toast('用户支付密码不能为空')
        } else {
          self.$axios.post('/api/users/userRegister', {
            userTel: self.userTel,
            userPassWord: self.userPassWord,
            userPayPass: self.userPayPass,
            userSecret: 0
          }).then(function (res) { // 获取部门
            console.log(res)
            self.$toast(res.data.CheckDetail)
            setTimeout(function () {
              self.$router.push('/')
            }, 300)
          }).catch(function (res) {
            console.log(res)
            alert(1)
          })
        }
      }
    }
  }
</script>

<style>
  .register {
    width: 100%;
    height: 100%;
    /*background:white;*/
  }

  .register .mint-header {
    background: #26a2ff;
  }

  .textinput > div {
    width: 100%;
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    margin: 3px 0;
  }

  .textinput > div > span {
    font-size: 26px;
    margin: 0 10px 0 10px;
  }

  .textinput > div > input {
    height: 27px;
    border: none;
    margin: 0;
    list-style-type: none;
    outline: none
  }

  .textinput input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #2c3e50;
  }

  .register .mint-cell-wrapper, .register .mint-cell:last-child {
    background-image: none;
  }

  .register .mint-checklist-title {
    display: none;
  }

  .register .mint-cell {
    min-height: 30px !important;
  }

  .register .button {
    width: 95%;
    margin: 0 auto;
  }

  .register .button .mint-button--default {
    width: 100%;
    background: #61B0FF;
    height: inherit;
    padding: 10px 0;
    font-size: 15px;
    border-radius: 8px;
    color: white;
    margin-top: 15px;
  }

</style>
