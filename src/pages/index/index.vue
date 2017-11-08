<template>
  <div class="index">
    <router-view></router-view>
    <mt-tabbar v-model="selected" :selected.sync="selected">
      <mt-tab-item :id="item.id" v-for="item in tabber" :Key="item.id">
        <img slot="icon" :src="item.img">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        selected: '/',
        tabber: [{
          id: '/',
          router: '/',
          img: require('../../../static/imgs/index.png'),
          name: '首页'
        }, {
          id: 'destinationapp',
          router: 'destinationapp',
          img: require('../../../static/imgs/destionation.png'),
          name: '目的地'
        }, {
          id: 'findapp',
          router: 'findapp',
          img: require('../../../static/imgs/find.png'),
          name: '发现'
        }, {
          id: 'myapp',
          router: 'myapp',
          img: require('../../../static/imgs/my.png'),
          name: '我的'
        }]
      }
    },
    methods: {
    },
    watch: {
      selected (value) {
        let self = this
        self.$router.push(value)
      }
    }
  }
</script>
<style>
</style>

