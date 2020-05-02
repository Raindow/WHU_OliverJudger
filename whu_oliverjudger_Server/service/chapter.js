const db = require('../config/db')
let showChapterList = (attr) => {
    return new Promise((resolve, reject) => {
        console.log('showChapterList');
        db.query(`select Chapter_Sub_CN,Chapter_Sub_ENG from Chapter where Chapter = '${attr}'`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

let showChapterAllList =()=>{
    return new Promise((resolve,reject)=>{
        console.log('showChapterAllList');
        db.query(`select Chapter,Chapter_Sub_CN,Chapter_Sub_ENG from Chapter`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};

let preview = (chapter) => {
    return new Promise((resolve, reject) => {
        db.query(`select proIndex, title, proLevel from chapterproblems where class = '${chapter}'`, (err, rows) => {
            if(err){
                reject(err);
            }
            console.log('gkdgkdgkd')
            console.log(rows)
            resolve(rows);
        })
    })
}

exports.showChapterList = showChapterList;
exports.showChapterAllList = showChapterAllList;
exports.preview = preview;
