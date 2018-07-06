<template>
    <div class="singers">
      <list-view :data="singers"></list-view>
    </div>
</template>

<script>
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
import Singer from "common/js/singer";
import ListView from "base/listView/listView";

const HOT_NAME = "热门";
const HOT_SINGER_LEN = 10;
export default {
  components: {
    ListView
  },
  data() {
    return {
      singers: []
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList()
        .then(res => {
          if (res.code === ERR_OK) {
            setTimeout(() => {
              this.singers = this._normalizeSinger(res.data.list);
            }, 1000);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer({ id: item.Fsinger_mid, name: item.Fsinger_name })
          );
        }
        const key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        );
      });

      // 将对象转化为有序的数组;
      let hot = [];
      let ret = [];
      for (var key in map) {
        let val = map[key];
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        } else if (val.title === HOT_NAME) {
          hot.push(val);
        } 
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      console.log(hot.concat(ret));
      return hot.concat(ret);
    }
  }
};
</script>

<style lang="stylus" scoped>
.singers {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>
