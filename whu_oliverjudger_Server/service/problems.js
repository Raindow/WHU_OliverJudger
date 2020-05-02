const db = require('../config/db')
let preview = () => {
  return new Promise((resolve, reject) => {
    db.query('select proIndex, title, proLevel from problems', (err, rows) => {
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
