var express = require('express');
var router = express.Router();
const catControl = require("../control/catControl");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//数据的显示
router.get("/list",catControl.getList);


//数据的添加
router.get("/add/:kw",catControl.addData);


//数据的删除
router.get("/remove/:id",catControl.delData);


//数据的模糊查找
router.get("/query/:mz",catControl.finData);


//数据的修改
router.get("/modify/:id",catControl.modData);

router.get("/modifyok/:id/:mf",catControl.okData);


//分页
router.get("/page/:page/:pageSize",catControl.pageData);

module.exports = router;
