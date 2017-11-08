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
      <div>
        <p><img src="../../../static/imgs/jingdian.png" alt=""></p>
        <p>美食</p>
      </div>
      <div><p><img src="../../../static/imgs/jingdian.png" alt=""></p>
        <p>购物</p></div>
      <div><p><img src="../../../static/imgs/jingdian.png" alt=""></p>
        <p>景点</p></div>
      <div><p><img src="../../../static/imgs/jingdian.png" alt=""></p>
        <p>酒店</p></div>
    </div>
    <div class="selects">
      <mt-cell title="热门推荐" is-link>
        <span style="color: green"></span>
      </mt-cell>
      <div class="scenicSpot">
        <div><img src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </div>
        <div><img src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </div>
        <div><img src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </div>
        <div><img src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </div>
        <div><img src="http://img1.vbooking.net/prd/201507/23/9948374651a9dbce6b5bbc1fbe0088998c2ab615.jpg@230w" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        selected: '1'
      }
    },
    methods: {
      selected (value) {
//        var self = this
        console.log(value)
      }
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
    margin-top: 5px;
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
  }

  .selects .mint-cell {
    min-height: 40px !important;
  }

  .selects .mint-cell-wrapper {
    background-image: none;
  }

  .mint-cell:last-child {
    background-image: none;
  }

  .index .scenicSpot {
    width: 95%;
    margin: 0 2.5%;
    /*height:300px;*/
    /*background:red;*/
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .index .scenicSpot div:nth-child(1) {
    width: 65%;
  }

  .index .scenicSpot div {
    width: 31.5%;
    /*margin:3px;*/
    margin: 1.5% 0;

  }

  .index .scenicSpot div img {
    width: 100%;
    height: 100%;
  }

</style>
