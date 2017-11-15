<template>
  <div class="indexs">
    <mt-header title="" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="back" @click="handleClose"></mt-button>
      </router-link>
      <mt-button slot="right" @click="more">帮助</mt-button>
    </mt-header>
    <div class="logobody">
      <div><img src="http://img2.imgtn.bdimg.com/it/u=135529677,1145169005&fm=27&gp=0.jpg" alt=""></div>
      <div>
        <div class="search">
          <mt-field label="用户名" placeholder="请输入用户名" v-model="userTel"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="userPassword"></mt-field>
        </div>
      </div>
      <div><span @click="forget">忘记密码</span><span @click="register">注册</span></div>
      <div>
        <mt-button @click.native="handleClick" :radius="80">登录</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        userTel: '',
        userPassword: '',
        value: ''
      }
    },
    mounted () {
    },
    methods: {
      handleClose () {
        console.log('返回')
      },
      more () {
        console.log('更多')
      },
      handleClick () {
        let self = this
        console.log(self.userPassword)
        self.$axios.post('/api/users/userSignin', {
          userTel: self.userTel,
          userPassWord: self.userPassword,
          userSecret: 0
        }).then(function (res) { // 获取部门
//        console.log(res.data.CheckDetail)
          if (res.data.CheckState === 0) {
            self.$toast(res.data.CheckDetail)
            self.$router.push('/index')
          } else {
            self.$toast(res.data.CheckDetail)
          }
        }).catch(function (res) {
          console.log(res)
        })
      },
      register () {
        let self = this
        self.$router.push('/register')
      },
      forget () {
        let self = this
        self.$router.push('/forget')
      }
    }
  }
</script>
<style>
  html,body{
    height:100%;
  }
  body {
    /*background: #C2E0F8;*/
  }

  * {
    padding: 0;
    margin: 0;
  }

  /*headerimg*/
  .indexs{
    overflow: hidden;
    background: #C2E0F8;
    height: 100%;
  }
  .indexs .bertarimg {
    width: 100%;
    height:100%;
  }

  .indexs .bertarimg > img {
    width: 100%;
  }

  .indexs .mint-searchbar {
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 0;
  }

  .indexs .mint-search {
    /*height: 40px;*/
    width: 70%;
    margin: 0 auto;
    padding: 3px 0;
  }

  .indexs .mint-searchbar {
    width: 100%;
    margin: 0 auto;
  }

  .indexs .search {
    position: static;
    top: 50px;
    width: 100%;
    height: inherit;
  }

  .indexs .mint-searchbar-inner, .indexs .mint-searchbar-core {
    background: transparent;
  }

  .indexs input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #ccc;
  }

  .indexs .mint-searchbar-cancel {
    display: none;
  }

  .indexs .mint-searchbar-inner {
    padding: 0;
  }

  .indexs .mint-button-icon, .mint-button-text {
    color: #656b79;
  }

  .mint-searchbar-inner .mintui-search {
    font-size: 16px;
    padding: 0 3px 0 5px;
  }

  .indexs .scenicSpot {
    /*display: flex;*/
    /*justify-content: space-between;*/
    margin-bottom: 100px;
  }

  .logobody {
    margin-top: 40%;
  }

  .logobody > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .search:nth-child(1) {
    margin-top: 10px;
  }

  .logobody > div:nth-child(1) > img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    text-align: center;
  }

  .logobody > div:nth-child(3) {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .logobody > div:nth-child(3) > span {
    margin: 0 5px;
    color: #61B0FF;
  }

  .logobody > div:nth-child(4) {
    width: 70%;
    margin: 0 auto;
  }

  .logobody > div:nth-child(4) .mint-button--default {
    background: #61B0FF;
    height: inherit;
    padding: 5px 0;
    font-size: 15px;
    border-radius: 14px;
    margin-top: 20px;
  }

  .logobody > div:nth-child(4) .mint-button {
    width: 100%;
  }

  .logobody > div:nth-child(4) .mint-button-text {
    color: white;
  }
  .search .mint-cell{
    min-height:30px;
    width:70%;
    margin:0 auto;
    background:transparent;
  }
  .search .mint-field .mint-cell-title{
    width:60px;
  }
  .search .mint-cell-wrapper{
    background-image: none;
  }
  .search .mint-cell-value input{
    background:transparent;
  }
  .search .mint-cell-wrapper{
    margin:3px 0;
    border:1px solid #ccc;
    border-radius: 15px;
  }
</style>
