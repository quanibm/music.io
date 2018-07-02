/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-07-01 12:17:07 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-07-02 10:38:04
 */

import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {

    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    console.log(url)
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}


function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    console.log('url', url)
    
    return url ? url.substring(1) : ''
}