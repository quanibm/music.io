<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <!-- 我们每切换一次页面都会发送一次请求。因此recommend里的created钩子里方法都会重新走一遍
      因此我们增加一个<keep-alive></keep-alive>，这样就可以将他们的dom都缓存在内存中。 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from "components/m-header/m-header";
  import Tab from "components/tab";
  export default {
    name: "App",
    components: {
      MHeader,
      Tab
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
</style>
