let express = require('express');
let router = express.Router();

// 关联process 
let process = require('../process/processList.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express1' });
});

//增
router.post('/getProcessList', function (req, res, next) {
  process.getProcessList(req, res, next);
});

//删
router.post('/deleteProcess', function (req, res, next) {
  process.deleteProcess(req, res, next);
});
//改
router.post('/updateProcess', function (req, res, next) {
  process.updateProcess(req, res, next);
});
//查
router.post('/searchProcess', function (req, res, next) {
  process.searchProcess(req, res, next);
});

module.exports = router;
