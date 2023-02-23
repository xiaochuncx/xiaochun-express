//实现与mysql交互
let mysql = require('mysql');
let $conf = require('../conf/db.js');
let $util = require('../util/util.js');
let $sql = require('./processSql.js');
// 向前台返回JSON方法的简单封装
let jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
}
//使用连接池
let pool = mysql.createPool($util.extend({}, $conf.mysql));
module.exports = {

  getProcessList: function (req, res, next) {
    pool.getConnection(function (err, connection) {
      // 获取前台页面传过来的参数
      let param = req.query || req.params;
      console.log('param：', param);
      // 建立连接，向表中插入值
      // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
      connection.query($sql.processinsert, [param.name, param.desc], function (err, result) {
        if (result) {
          result = {
            code: 200,
            msg: '增加成功'
          };
        }

        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);

        // 释放连接 
        connection.release();
      });
    });
  }
}