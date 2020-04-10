const db = require('../config/db')
let show = () => {
  return new Promise((resolve, reject) => {
    console.log('show in');
    db.query('select * from announcement', (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
};

let showAttr = (attr) => {
  return new Promise((resolve, reject) => {
    console.log('show Attr in');
    db.query(`select ${attr} from announcement`, (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
}

exports.show = show;
exports.showAttr = showAttr;
