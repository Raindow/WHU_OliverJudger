const db = require('../config/db')



// 添加记录函数
let searchSubmission = (ID) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from submission where StudentID = ${ID}`, (err, submission) => {
            if(err) {
                resolve(err)
            }
            else{
                if (submission.length===0){
                    console.log('暂无提交记录')
                    resolve(false)
                }
                else {
                    console.log('submission',submission)
                    resolve(submission)
                }

            }
        })
    })
}
exports.searchSubmission = searchSubmission;

let showTitle = (attr,attr1) => {
    return new Promise((resolve, reject) => {
        console.log('showTitle');
        if(attr==='Python'){
        db.query(`select python from problems where title = '${attr1}'`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })}else if(attr==='Java'){
            db.query(`select java from problems where title = '${attr1}'`, (err, rows) => {
                if(err) {
                    reject(err);
                }
                resolve(rows);
            })
        }else  if(attr==='C++'){
            db.query(`select cpp from problems where title = '${attr1}'`, (err, rows) => {
                if(err) {
                    reject(err);
                }
                resolve(rows);
            })
        }
    })
};
exports.showTitle = showTitle;
