const db = require('../config/db')
let showCourseChapterList = (attr) => {
    return new Promise((resolve, reject) => {
        console.log('show in');
        db.query(`select Chapter,link,name from course where Class = '${attr}'`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

let showCourseChapterAllList =()=>{
    return new Promise((resolve,reject)=>{
        console.log('showCourseChapterAllList');
        db.query(`select Chapter,link,name from course`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

exports.showCourseChapterList = showCourseChapterList;
exports.showCourseChapterAllList = showCourseChapterAllList;
