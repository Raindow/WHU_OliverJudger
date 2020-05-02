/*
 * problem.js
 * 用于处理题目的东西
 * 这里两个方法一个是用于筛选出所有的status=0的题目
 * 其次第二个方法是获得指定题目的所有信息
 */
const db = require('../config/db')
let preview = () => {
  return new Promise((resolve, reject) => {
    db.query('select proIndex, title, proLevel from problems where status=0', (err, rows) => {
      if(err){
        reject(err);
      }
      resolve(rows);
    })
  })
}

let detail = (title) => {
  console.log(title)
  return new Promise((resolve, reject) => {
    db.query(`select * from problems where title = '${title}'`, (err, rows) => {
      if(err){
        reject(err);
      }
      resolve(rows);
    })
  })
}

exports.preview = preview;
exports.detail = detail;
