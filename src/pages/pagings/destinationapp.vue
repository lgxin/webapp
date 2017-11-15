<template>
  <div class="indexs">
    <div class="bertarimg">
      <img src="http://www.2215985.com/uploads/allimg/170726/1-1FH6104341P2-lp.jpg" alt="">
    </div>
    <div class="search">
      <mt-search
        v-model="value"
        placeholder="目的地/景点/酒店">
      </mt-search>
    </div>
    <div class="">
      <div class="swiper-container">
        <ul class="swiper-container-ul">
          <li class="swiper-container-ul-li actives">商品</li>
          <li class="swiper-container-ul-li">店铺</li>
        </ul>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="content">
              <div class="left">
                <ul>
                  <li v-for="item in items">{{item.name}}</li>
                </ul>
              </div>
              <div class="right">
                <ul>
                  <li v-for="item in item">
                    <div class="class-title">{{item.class}}</div>
                    <div v-for="ite in item.list">
                      <div class="item">
                        <div class="item-left">
                          <div class="item-img"></div>
                        </div>
                        <div class="item-right">
                          <div class="title">{{ite.title}}</div>
                          <div class="subtitle"></div>
                          <div class="price"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="swiper-slide" style="display:none;">
            店铺介绍
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data: function () {
      return {
        value: '',
        items: [
          {name: '分类1'},
          {name: '分类2'},
          {name: '分类3'},
          {name: '分类4'},
          {name: '分类5'},
          {name: '分类6'},
          {name: '分类7'},
          {name: '分类8'}
        ],
        item: [
          {class: '分类1', list: [{title: '1'}, {title: '2'}]},
          {class: '分类2', list: [{title: '1'}, {title: '2'}]},
          {class: '分类3', list: [{title: '1'}, {title: '2'}]},
          {class: '分类4', list: [{title: '1'}, {title: '2'}]},
          {class: '分类5', list: [{title: '1'}, {title: '2'}]},
          {class: '分类6', list: [{title: '1'}, {title: '2'}]},
          {class: '分类7', list: [{title: '1'}, {title: '2'}]},
          {class: '分类8', list: [{title: '1'}, {title: '2'}]}
        ]
      }
    },
    methods: {},
    created: function () {
      $(function () {
        $('.content').css('height', $('.right').height())
        $('.left ul li').eq(0).addClass('active')
        $(window).scroll(function () {
          if ($(window).scrollTop() >= 150) {
            $('.swiper-container-ul').css('position', 'fixed')
            $('.left').css('position', 'fixed')
            $('.right').css('margin-left', $('.left').width())
          } else {
            $('.swiper-container-ul').css('position', '')
            $('.left').css('position', '')
            $('.right').css('margin-left', '')
          }
          ;
//          滚动到标杆位置,左侧导航加active
          $('.right ul li').each(function () {
            var target = parseInt($(this).offset().top - $(window).scrollTop() - 150)
            var i = $(this).index()
            if (target <= 0) {
              $('.left ul li').removeClass('active')
              $('.left ul li').eq(i).addClass('active')
            }
          })
        })
        $('.left ul li').click(function () {
          var i = $(this).index('.left ul li')
          $('body, html').animate({scrollTop: $('.right ul li').eq(i).offset().top - 40}, 500)
        })
        $('.swiper-container-ul-li').click(function () {
          var index = $(this).index()
          if (index === 0) {
            $('.swiper-slide').eq(0).show()
            $('.swiper-container-ul-li').eq(0).addClass('actives')
            $('.swiper-slide').eq(1).hide()
            $('.swiper-container-ul-li').eq(1).removeClass('actives')
          } else {
            $('.swiper-slide').eq(0).hide()
            $('.swiper-container-ul-li').eq(0).removeClass('actives')
            $('.swiper-slide').eq(1).show()
            $('.swiper-container-ul-li').eq(1).addClass('actives')
          }
        })
      })
    }
  }
</script>
<style>
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
    border: 1px solid white;
    border-radius: 20px;
    padding: 0;
  }

  .indexs .mint-search {
    height: 40px;
    width: 90%;
    margin: 0 auto;
  }

  .indexs .mint-searchbar {
    width: 100%;
    margin: 0 auto;
  }

  .indexs .search {
    position: absolute;
    top: 50px;
    width: 100%;
    height: 0;
  }

  .indexs .mint-searchbar-inner, .indexs .mint-searchbar-core {
    background: transparent;
  }

  input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: white;
  }

  .indexs .mint-searchbar-cancel {
    display: none;
  }

  .indexs .mint-searchbar-inner {
    padding: 0;
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
</style>
