<template>
  <div class="index">
    <div class="swipes">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img
          src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </mt-swipe-item>
        <mt-swipe-item><img
          src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </mt-swipe-item>
        <mt-swipe-item><img
          src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="search">
      <mt-search
        v-model="value"
        placeholder="目的地/景点/酒店">
      </mt-search>
    </div>
    <div class="Navigation">
      <div v-for="item in Navigation" @click="navigation(item.router)">
        <p><img :src="item.img" alt=""></p>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="selects">
      <mt-navbar class="page-part" v-model="selecteds">
        <mt-tab-item id="1">国内游</mt-tab-item>
        <mt-tab-item id="2">国外游</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selecteds">
        <mt-tab-container-item id="1">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1346726542,2258883238&fm=27&gp=0.jpg"
               alt="">
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <img src="http://img4.imgtn.bdimg.com/it/u=4169377101,3389541059&fm=200&gp=0.jpg" alt="">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        value: '',
        selecteds: '1',
        Navigation: [{
          name: '景点',
          img: require('../../../static/imgs/jingdian.png'),
          router: '/tourismList'
        }, {
          name: '景点',
          img: require('../../../static/imgs/jingdian.png'),
          router: '/'
        }, {
          name: '景点',
          img: require('../../../static/imgs/jingdian.png'),
          router: '/'
        }, {
          name: '景点',
          img: require('../../../static/imgs/jingdian.png'),
          router: '/'
        }, {
          name: '景点',
          img: require('../../../static/imgs/jingdian.png'),
          router: '/'
        }]
      }
    },
    methods: {
      navigation (value) {
        console.log(value)
        this.$router.push(value)
      }
    },
    created () {
    }
  }
</script>
<style>
  body {
    background: #F1F1F1;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .index .mint-searchbar {
    background-color: transparent;
    border: 1px solid white;
    border-radius: 20px;
    padding: 0;
  }

  .index .swipes {
    width: 100%;
    height: 180px;
  }

  .index .swipes img {
    width: 100%;
    height: 100%;
  }

  .index .mint-search {
    height: 40px;
    width: 90%;
    margin: 0 auto;
  }

  .index .mint-searchbar {
    width: 100%;
    margin: 0 auto;
  }

  .index .search {
    position: absolute;
    top: 15px;
    width: 100%;
    height: 0;
  }

  .index .mint-searchbar-inner, .index .mint-searchbar-core {
    background: transparent;
  }

  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: white;
  }

  .index .mint-searchbar-cancel {
    display: none;
  }

  .index .mint-searchbar-inner {
    padding: 0;
  }

  .index .Navigation {
    width: 100%;
    /*height: 30px;*/
    background: white;
    display: flex;
    padding: 5px 0;
    justify-content: space-around;
  }

  .index .Navigation div {
    /*width:30px;*/
    /*height: 30px;*/
  }

  .index .Navigation div P:nth-child(1) {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: deepskyblue;
    padding: 3px;
    margin-bottom: 2px;
  }

  .index .Navigation div P:nth-child(2) {
    text-align: center;
    font-size: 12px;
  }

  .index .Navigation div P:nth-child(1) img {
    width: 100%;
    height: 100%;
  }

  .index .selects {
    margin-bottom: 60px;
  }

  .item {
    display: inline-block;
  }

  .nav {
    padding: 10px;
  }

  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }

  .index .page-part {
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }

  .index .mint-tab-container {
    /*margin-top:8px;*/
  }

  .selects .mint-navbar .mint-tab-item {
    padding: 9px 0;
    flex: inherit;
    margin: 0 50px;
  }

  .mint-searchbar-inner .mintui-search {
    font-size: 16px;
    padding: 0 3px 0 5px;
  }

  .selects {

  }
</style>
