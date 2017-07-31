/**
 * Created by Administrator on 2017/7/31 0031.
 */
module.exports = {
    unique: function (source, attr) {
      var obj = {};
      var res = [];
      var len = source.length;
      for (let i = 0; i < len; i++) {
        if (!obj[source[i][attr]]) {
          obj[source[i][attr]] = 1;
          res.push(source[i]);
        }
      }

      return res;
    }
};
