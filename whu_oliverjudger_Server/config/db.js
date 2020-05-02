// 导入mysql模板
const mysql = require("mysql");

// 数据库连接配置,连接池
let pool = mysql.createPool({
  host: "localhost",
  port     : 3306,
  user: "root", // 数据库用户名
  password: "hezijishuohua8", // 数据库密码
  database: "whu_oliverjudger"  // 数据库名称
});

// 创建query函数（查询）
// 对数据库进行增删改查的基础
function query(sql, callback){
  pool.getConnection(function(err, connection){
    if(err){
      console.log("连接池分配失败");
      console.error(err);
    }else{
      console.log("连接池连接");
      connection.query(sql, function(err, rows){
        callback(err, rows);
        connection.release()
      })
    }
  })
}
exports.query = query;
