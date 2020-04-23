const db = require('../config/db')

// 登录验证函数
let verifyLogin = (ID,password) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from students where StudentID = ${ID}`, (err, user) => {
            if(err) {
                resolve(err)
            }
            else{
                if (user.length===0){
                    resolve('此用户不存在')
                }
                else {
                    console.log('allusers',user[0])
                    if (user[0].Password === password){
                        resolve('验证成功')
                    }else {
                        resolve('密码错误');
                    }
                }

            }
        })
    })
}
exports.verifyLogin = verifyLogin;

// 判断账户是否存在
let isStudentExist = (ID) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from students where StudentID = ${ID}`, (err, user) => {
            if(err) {
                resolve(err)
            }
            else{
                if (user.length===0){
                    console.log('此用户不存在')
                    resolve(false)
                }
                else {
                    console.log('此用户已存在')
                    resolve(true)
                }

            }
        })
    })
}
exports.isStudentExist = isStudentExist;

// 添加账户
let add = (ID,password,stuName,major,email) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO students (StudentID, Password,Name,Major,Email)VALUES( ${ID},  ${password},${stuName},${major},  ${email})`, (err, user) => {
            if(err) {
                resolve(err)
            }
            else{
                resolve('注册成功')

            }
        })
    })
}
exports.add = add;

let showProfile = (attr) => {
    return new Promise((resolve, reject) => {
        console.log('showChapterList');
        db.query(`select Name,Major from students where StudentID = '${attr}'`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};
exports.showProfile = showProfile;


// 更新账户
let updateProfile = (ID,Name,Major) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE students SET  Name='${Name}'  , Major='${Major}' WHERE StudentID = ${ID}`, (err, user) => {
            if(err) {
                console.log(err)
                resolve(err)
            }
            else{
                resolve('Profile更新成功')
                console.log('Profile更新成功')
            }
        })
    })
}
exports.updateProfile = updateProfile;

// 获取用户的密码和邮箱
let getAccount = (attr) => {
    return new Promise((resolve, reject) => {
        console.log('getAccount');
        db.query(`select Password,Email from students where StudentID = ${attr}`, (err, rows) => {
            if(err) {
                reject(err);
            }
            resolve(rows);
        })
    })
};
exports.getAccount = getAccount;

// 更新账户
let updateAccountPassword = (ID,Password) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE students SET  Password='${Password}' WHERE StudentID = '${ID}'`, (err, user) => {
            if(err) {
                console.log(err)
                console.log('updateAccountPassword')
                resolve(err)
            }
            else{
                resolve('Profile更新成功')
                console.log('updateAccountPassword')
            }
        })
    })
}
exports.updateAccountPassword = updateAccountPassword;
