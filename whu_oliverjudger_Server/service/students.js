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


let verifyRgister = (ID,password, email) => {
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
