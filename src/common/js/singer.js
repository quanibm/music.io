/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-07-05 10:36:07 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-07-05 11:00:48
 */




export default class Singer {
  constructor({ id, name }) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${id}.jpg?max_age=2592000`
  }
}