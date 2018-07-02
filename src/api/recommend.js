/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-07-01 13:39:22 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-07-02 10:31:02
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config';


export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 204606686,
        needNewCode: 1,
    })
    console.log('data', data)
    return jsonp(url, data, options)
}