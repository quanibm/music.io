<template>
    <div>
        This is a singer page
    </div>
</template>

<script>
import {getSingerList} from 'api/singer';
    export default {
      created () {
        this._getSingerList()
      },
      methods: {
        _getSingerList(){
          getSingerList().then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err)
          });
        }
      }

    }
</script>

<style scoped>

</style>