let processSql = {
  //增
  processinsert: 'INSERT INTO `process` (`id`,`name`,`desc`) VALUES(0,?,?)',
  //删
  processdelete: 'delete from process where id=?',
  //改
  processupdate: 'UPDATE `process` SET `name`=?,`desc`=? WHERE `id`=?',
  //查
  processAll: 'select * from process',
  processById: 'select * from process where id=?'
}

module.exports = processSql;