const db = require('config/db')
let show = () => {
    return new  Promise((resolve, reject) => {
        db.query('select * from Announcement', (err, rows) => {
            if(err) {
                reject(err);
            }
            console.log(rows)
            resolve(rows);
        })
    })
}//显示全部 （select*）

let select = (attributename, attribute) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from Announcement where ${attributename} = '${attribute}'`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
}//查询一行（传参)

exports.show = show
exports.select = select
