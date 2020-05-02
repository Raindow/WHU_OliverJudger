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
        console.log('detail false')
        reject(err);
      }
      console.log('detail success')
      resolve(rows);
    })
  })
}

exports.preview = preview;
exports.detail = detail;
