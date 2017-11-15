<template>
  <div class="tourismlList">
    <mt-header title="返回">
      <router-link to="/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">热门</mt-tab-item>
      <mt-tab-item id="2">我的</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                     @top-status-change="handleTopChange" ref="loadmore">
          <div class="hostL" v-for="(item,index) in hostList">
            <div :id = "index">
              <img :src="item.hostListImg" alt="">
            </div>
            <div>
              <p>{{item.hostListName}}</p>
              <p><span>1212</span><span>121</span><span @click="removeData(item.hostOrderID,index)">删除</span></p>
            </div>
          </div>
        </mt-loadmore>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="hostL" v-for="item in hostList">
          <div>
            <img :src="item.hostListImg" alt="">
          </div>
          <div>
            <p>{{item.hostListName}}</p>
            <p><span>1212</span><span>121</span></p>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        allLoaded: false,
        selected: '1',
        hostList: [],
        searchCondition: { // 分页
          pageNo: 1,
          pageSize: 10
        }
      }
    },
    methods: {
      removeData (val, index) {
        console.log(val, index)
        let self = this
        self.$axios.post('/api/users/removeList', {
          hostOrderID: val
        }).then(function (res) {
          console.log(res)
          if (!res.data.CheckState) {
            self.$toast({
              message: res.data.CheckDetail,
              iconClass: 'icon icon-success'
            })
            self.hostList.splice(index, 1)
          } else {
            self.$toast({
              message: res.data.CheckDetail,
              iconClass: 'icon icon-success'
            })
          }
        }).catch(function (res) {
          console.log(res)
        })
      },
      onTopLoaded () {
        console.log('数据加载成功')
      },
      more () {
        let self = this
        self.searchCondition.pageNo += 1
        console.log(self.searchCondition.pageNo)
//        console.time()
//        console.debug()
        self.$axios.get('/api/users/hostList', {
          params: {
            hostListpageing: self.searchCondition.pageNo,
            hostListpageSize: self.searchCondition.pageSize
          }
        }).then(function (res) {
          res.data.hostList.forEach(function (value, index, array) {
//            console.log(array[index])
            self.hostList = self.hostList.concat(array[index])
          })
          console.log(res.data.hostList.length, '---+++----')
          console.table(res.data.hostList)
          if (res.data.hostList.length < 10) { // 当数据小于10条时
            this.allLoaded = true
          }
          console.log(self.hostList)
        }).catch(function (res) {
          console.log(res)
        })
//        console.timeEnd()
      },
      loadTop () { // top的下拉刷新
        // 加载更多数据
        var self = this
        setTimeout(function () {
          self.more()
          self.$refs.loadmore.onTopLoaded()
        }, 500)
        console.log('下拉刷新')
      },
      loadBottom () { // bottom的上拉刷新
        this.more()
        this.isHaveMore()
      },
      handleTopChange () { // 拉到底部和刷新完成触发
//        console.log(0)
      }
    },
    created () {
      let self = this
      self.$axios.get('/api/users/hostList', {
        params: {
          hostListpageing: 1,
          hostListpageSize: 10
        }
      }).then(function (res) {
        console.log(res.data.hostList)
        self.hostList = res.data.hostList
      }).catch(function (res) {
        console.log(res)
      })
    },
    watch: {}
  }
</script>
<style>
  .tourismlList .mint-header {
    background: deepskyblue;
  }

  .hostL {
    width: 95%;
    display: flex;
    padding: 10px 2.5%;
  }

  .hostL > div:nth-child(1) {
    width: 100px;
    height: 80px;
    flex: 0.5;
  }

  .hostL > div:nth-child(1) > img {
    width: 100%;
    height: 100%;
  }

  .hostL > div:nth-child(2) {
    box-sizing: border-box;
    padding: 3px 0;
    margin-left: 8px;
    border-bottom: 1px solid #ccc;
    flex: 1;
  }

  .hostL > div:nth-child(2) > p:nth-child(2) {
    margin-top: 35px;
  }
</style>
