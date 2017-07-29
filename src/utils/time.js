/**
 * Created by Administrator on 2017/7/29 0029.
 */
module.exports = {
  formatDate: function (time) {
    let date = new Date(time*1),
      month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
      day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

    return `${month}月${day}日上映`
  },

  formatDate2: function (time) {
    let date = new Date(time*1),
      month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
      day = date.getDate()  > 9 ? date.getDate()  : '0' + date.getDate(),
      week = date.getDay();

    let arr = ['日','一','二','三','四','五','六'];

    return `${month}月${day}日上映 星期${arr[week]}`
  }
};
