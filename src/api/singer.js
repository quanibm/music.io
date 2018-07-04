/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-07-04 20:20:50 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-07-04 20:49:48
 */





import jsonp from 'common/js/jsonp';
import { commonParams, options } from 'api/config';
import Axios from 'axios';


export function getSingerList() {
  const url = "https://c.y.qq.com/v8/fcg-bin/v8.fcg";

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744
  })

  return jsonp(url, data, options)

}
