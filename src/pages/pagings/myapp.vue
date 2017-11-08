<template>
  <div class="index">
    <mt-header title="">
      <router-link to="" slot="left">
        <mt-button class="iconfont icon-seting"></mt-button>
      </router-link>
      <mt-button class="iconfont icon-xiaoxi " slot="right"></mt-button>
    </mt-header>
    <div class="headerimg">
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2817871749,158124777&fm=27&gp=0.jpg" alt="">
    </div>
    <div class="userimg">
      <div>
        <div><img
          src="http://img02.sogoucdn.com/app/a/100520093/11388287d0e56ad7-53b51a5be5b5a2db-9e20f21c3413f36b211a6543ad164d1f.jpg"
          alt=""></div>
        <div><p>九粒 <i class="iconfont icon-huangguan"></i></p>
          <p>旅行使我快乐</p></div>
      </div>
      <div>旅行达人</div>
    </div>
    <div class="historicalrecord">
      <div><p>关注</p>
        <p>45</p></div>
      <div><p>粉丝</p>
        <p>102</p></div>
      <div><p>提问</p>
        <p>14</p></div>
      <div><p>足迹</p>
        <p>89</p></div>
      <div><p>收藏</p>
        <p>21</p></div>
    </div>
    <div class="myorder">
      <mt-cell title="我的订单" is-link>
        <span style="color: green"></span>
      </mt-cell>
      <div class="myorderDetails">
        <div><p><i class="iconfont icon-xiaoxi"></i></p>
          <p>待支付</p></div>
        <div><p><i class="iconfont icon-xiaoxi"></i></p>
          <p>待出行</p></div>
        <div><p><i class="iconfont icon-xiaoxi"></i></p>
          <p>待评价</p></div>
        <div><p><i class="iconfont icon-xiaoxi"></i></p>
          <p>退款售后</p></div>
      </div>
    </div>
    <div class="myorder service">
      <mt-cell title="常用信息" is-link>
        <span style="color: green"></span>
      </mt-cell>
      <mt-cell title="好友管理" is-link>
        <span style="color: green"></span>
      </mt-cell>
      <mt-cell title="客服电话" is-link>
        <span style="color: green"></span>
      </mt-cell>
      <mt-cell title="历史信息" is-link>
        <span style="color: green"></span>
      </mt-cell>
      <mt-cell title="关于我们" is-link>
        <span style="color: green"></span>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {}
    },
    methods: {}
  }
</script>
<style>

  * {
    padding: 0;
    margin: 0;
  }

  .index {
    background: #F1F1F1;
  }

  .index .mint-header {
    width: 100%;
    position: absolute;
    top: 0;
    background: transparent;

  }

  .index .icon-xiaoxi {
    font-size: 18px !important;
  }

  .index .mint-header .mint-button {
    font-size: 24px;
  }

  .headerimg {
    width: 100%;
    height: 150px;
  }

  .headerimg img {
    width: 100%;
    height: 100%;
  }

  .index .userimg {
    width: 97.5%;
    display: flex;
    justify-content: space-between;
    padding: 4px 0 4px 2.5%;
    position: absolute;
    top: 70px;
    align-items: center;
  }

  .index .userimg div:nth-child(1) {
    display: flex;
  }

  .index .userimg div:nth-child(1) div:nth-child(1) {
    margin-right: 8px;
  }

  .index .userimg div:nth-child(1) div:nth-child(1) img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .index .userimg div:nth-child(1) div:nth-child(2) p:nth-child(1) {
    font-size: 14px;
    color: white;
  }

  .index .userimg div:nth-child(1) div:nth-child(2) p:nth-child(1) > i {
    font-size: 14px;
    color: rgb(244, 234, 42);
  }

  .index .userimg div:nth-child(1) div:nth-child(2) p:nth-child(2) {
    font-size: 14px;
    color: white;
    text-align: center;
  }

  .index .userimg > div:nth-child(2) {
    width: 60px;
    /*height:25px;*/
    /*background:red;*/
    border-radius: 15px 0 0 15px;
    line-height: 25px;
    text-align: center;
    color: white;
    font-size: 12px;
    background: rgba(225, 225, 225, 0.4);
    border-left: 2px solid #efefef;
    border-top: 2px solid #efefef;
    border-bottom: 2px solid #efefef;
  }
  .historicalrecord, .myorderDetails {
    width: 100%;
    display: flex;
    justify-content: center;
    background: white;
    margin-bottom: 5px;
    padding:5px 0
  }

  .historicalrecord > div {
    width: 20%;
  }

  .historicalrecord > div > p {
    text-align: center;
  }

  .historicalrecord > div > p:nth-child(1) {
    font-size: 14px;
  }

  .historicalrecord > div > p:nth-child(2) {
    font-size: 12px;
  }

  .myorder .mint-cell {
    min-height: 40px;
  }

  .myorder .mint-cell-wrapper {
    background-image: none;
    border-bottom: 1px solid #efefef;
  }

  .myorderDetails > div {
    width: 25%;
    margin:3px 0;
  }

  .myorderDetails > div > p {
    text-align: center;
  }

  .myorderDetails > div > p:nth-child(1) > i {
    font-size: 22px !important;
  }

  .myorderDetails > div > p:nth-child(2) {
    /*width:20%;*/
    font-size: 14px;
  }
  .service a .mint-cell-wrapper{
    font-size: 14px !important;
  }
  .historicalrecord>div:active,.myorderDetails>div:active{
      background:#efefef;
  }

</style>

