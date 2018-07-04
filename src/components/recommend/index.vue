<template>
    <div class="recommend">
        <scroll ref="scroll" class="recommend-content" :data="discList">
          <div>
            <div v-if="this.banners.length > 0" class="slider-wrapper">
                <slider>
                    <div v-for="item in banners" :key="item.id">
                        <a :href="item.linkUrl">
                            <img class="needsClick" @load="loadImage" :src="item.picUrl" alt="banner">
                        </a>
                    </div>
                </slider>
            </div>
            <div class="recommend-list">
                <h1 class="list-title">Hot song recommendation</h1>
                <ul>
                    <li class="item" v-for="item in discList" :key="item.id">
                        <div class="icon">
                            <img width="60" height="60" v-lazy="item.imgurl" alt="icon" >
                        </div>
                        <div class="text">
                            <h2 class="name" v-html="item.creator.name"></h2>
                            <p class="disc" v-html="item.dissname"></p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          <div class="loading-container" v-show="!discList.length">
            <loading></loading>
          </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from "base/scroll/scroll";
import Slider from "base/slider/slider";
import Loading from "base/loading/loading";
import { getRecommend, getDiscList } from "api/recommend";
import { ERR_OK } from "api/config";

export default {
  data() {
    return {
      banners: [],
      discList: []
    };
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.banners = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList()
        .then(res => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh();
        this.checkLoaded = true;
      }
    }
  },
  components: { Slider, Scroll, Loading }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  left: 0;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }

      .item {
        display: flex;
        text-align: center;
        box-sizing: border-box;
        padding: 0 20px 20px 20px;

        .icon {
          width: 60px;
          padding-right: 20px;
        }

        .text {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;

          .name {
            margin-bottom: 10px;
            color: $color-text;
            font-weight: 600;
          }

          .desc {
            color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
