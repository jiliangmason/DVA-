/**
 * Created by Administrator on 2017/7/29 0029.
 */
module.exports = {
  formatDate: function (time) {
    let date = new Date(time*1),
      month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1) ,
      day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

    return `${month}月${day}日上映`
  }
};
