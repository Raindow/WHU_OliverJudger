const db = require('../config/db')
let showDeail = (attr) => {
  return new Promise((resolve, reject) => {
    db.query(`select Content from announcement where Title = '${attr}'`, (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
};

let showList =()=>{
  return new Promise((resolve,reject)=>{
    db.query(`select Title, Time from announcement`, (err, rows) => {
      if(err) {
        reject(err);
      }
      resolve(rows);
    })
  })
};


exports.showDeail = showDeail;
exports.showList = showList;
