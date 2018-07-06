<template>
<scroll class="listView" :data="data">
  <ul>
    <li v-for="group in data" :key="group.id" class="list-group">
      <h2 class="list-group-title" v-text="group.title"></h2>
      <ul>
        <li v-for="item in group.items" :key="item.id" class="list-group-item">
          <img class="avatar" v-lazy="item.avatar" alt="歌手头像">
          <span class="name" v-text="item.name"></span>
        </li>
      </ul>
    </li>
  </ul>
  <div class="shortcut" @touchstart="onShortcutTouchStart">
    <ul>
      <li class="item" v-for="(item,index) in shortcutList" :key="index" v-text="item" :data-index="index"></li>
    </ul>
  </div>
</scroll>
</template>

<script>
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { getData } from "common/js/dom";

export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    shortcutList() {
      console.log(this.data.map(group => group.title.substr(0, 1)));
      return this.data.map(group => group.title.substr(0, 1));
    }
  },
  methods: {
    onShortcutTouchStart(e) {
      console.log(e.target);
      const bbb = getData(e.target, "index");
      console.log(bbb);
    }
  },
  components: {
    Scroll
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.listView {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;

  .list-group {
    padding-bottom: 30px;

    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }

    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;

      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }

  .shortcut {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: sans-serif;

    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;

      &.current {
        color: $color-theme;
      }
    }
  }
}
</style>
