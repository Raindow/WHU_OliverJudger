var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'kewilliam91',
    database:'WHU_OliverJudger'
});
connection.connect();
var sql = 'SELECT * FROM Announcement';
var str = ""
connection.query(sql, function (err,result) {
    if(err){
        console.log('[SELECT ERROR]:',err.message);
    }
    console.log(result);  //数据库查询结果返回到result中
    str = JSON.stringify(result);
    //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    //console.log(result);   //数据库查询结果返回到result中
    console.log(str);

});
/* GET users listing. */
router.post('/', function(req, res, next) {
    res.send(str);
});

connection.end()
module.exports = router;
