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


// 用于获取对应某个小节的所有题目
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
exports.preview = preview;
