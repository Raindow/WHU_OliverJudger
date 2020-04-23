const db = require('../config/db')

// 添加记录函数
let addSubmission = (data) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO submission (studentID, submissionTime,submissionStatus,problemIndex,problemName,usingTime,usingMemory,usingLanguage,failReason)VALUES
        ( ${data.studentID}, ${data.submissionTime},${data.submissionStatus},${data.problemIndex},${data.problemName},${data.usingTime},${data.usingMemory},${data.usingLanguage},${data.failReason})`, (err, result) => {
            if(err) {
                resolve(err)
            }
            else{
                resolve('添加成功')

            }
        })
    })
}
exports.addSubmission = addSubmission;

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
