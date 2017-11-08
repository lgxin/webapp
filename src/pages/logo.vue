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
          <mt-search
            v-model="value"
            placeholder="请输入用户名/邮箱/账户名">
          </mt-search>
        </div>
        <div class="search">
          <mt-search
            v-model="value"
            placeholder="请输入密码">
          </mt-search>
        </div>
      </div>
      <div><span>忘记密码</span><span>注册</span></div>
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
        this.$toast('登录成功!')
        let self = this
        self.$router.push('/index')
      }
    }
  }
</script>
<style>
  body{
    background: #C2E0F8;
  }
  * {
    padding: 0;
    margin: 0;
  }

  /*headerimg*/
  .bertarimg {
    width: 100%;
  }

  .bertarimg > img {
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

  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #ccc;
  }

  .indexs .mint-searchbar-cancel {
    display: none;
  }

  .indexs .mint-searchbar-inner {
    padding: 0;
  }

  .mint-button-icon, .mint-button-text {
    color: #656b79;
  }

  .mint-searchbar-inner .mintui-search {
    font-size: 16px;
    padding: 0 3px 0 5px;
  }

  .scenicSpot {
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
</style>
