const express = require('express');
const router = express.Router();
let submission = require('../service/submission');
const fs = require('fs');
const multer = require('multer');
// const path = (language)=>{
//     switch(language) :
//         case 'cpp':
// }

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, callback) {
        callback(null, req.body.ID + '_' + new Date().toLocaleDateString() + '_' + req.body.title + '.' + req.body.language);

    }
})
const upload = multer({storage: storage});

// 处理添加记录请求
router.post('/submit', upload.single('file'), async (req, res, next) => {
    try {
        let filePath=''
        if(req.body.content){
            filePath = './uploads'+'/' + req.body.ID + '_' + new Date().toLocaleDateString() + '_' + req.body.title + '.' + req.body.language;
            // console.log('aaa',filePath);
            fs.writeFile(filePath, req.body.content, (err) =>{
                if(err) {
                    console.log(err);
                }else {
                    console.log('get file success');
                }
            })
        }
        // console.log(req.body)
        let result=''
        let newPath=''
        let oldPath=''
        let languageType=''
        if (filePath===''){
            // console.log(req.file)
            const path = require('path');
            let extname = path.extname(req.file.filename);
            oldPath=req.file.path
            if (extname==='.py'){
                newPath='../EPIJudge-master/epi_judge_python_solutions'+'/'+'test' +extname
                languageType='python'
            }else if(extname==='.java'){
                newPath='../EPIJudge-master/epi_judge_java_solutions'+'/epi/'+'AbsentValueArray' +extname
                languageType='java'
            }else if(extname==='.cpp'){
                newPath='../EPIJudge-master/epi_judge_cpp_solutions'+'/'+'test' +extname
                languageType='cpp'
            }

        } else {
            // console.log('bbb',req.body.language)
            oldPath=filePath
            if (req.body.language==='py'){
                newPath='../EPIJudge-master/epi_judge_python_solutions'+'/'+'test' + '.' + req.body.language
                languageType='python'
            }else if(req.body.language==='java'){
                newPath='../EPIJudge-master/epi_judge_java_solutions'+'/epi/'+'AbsentValueArray' + '.' + req.body.language
                languageType='java'
            }else if(req.body.language==='cpp'){
                newPath='../EPIJudge-master/epi_judge_cpp_solutions'+'/'+'test' + '.' + req.body.language
                languageType='cpp'
            }

        }
        // console.log('qq',newPath)
        fs.copyFile(oldPath, newPath, (err) =>{
            if(err) {
                console.log(err);
            }else {
                console.log('copy success');

            }
        })
        // 异步调用py
        if (languageType==='python'){
            const exec = require('child_process').exec;
            exec('python ../EPIJudge-master/epi_judge_python_solutions/test.py',function(error,stdout,stderr){
                if(error) {
                    console.info('stderr : '+stderr);
                }
                // console.log('exec: ' + stdout);
                result=stdout
                console.log('result',result)
                res.send(result);

            })

        }// 异步调用java
        else if(languageType==='java'){
            // const exec = require('child_process').exec;
            // exec('javac ../EPIJudge-master/epi_judge_java_solutions/epi/AbsentValueArray.java',function(error,stdout,stderr){
            //     if(error) {
            //         console.info('stderr : '+stderr);
            //     }
            //     // console.log('exec: ' + stdout);
            //     result=stdout
            //     console.log('result',result)
            //     // res.send(result);

            // })
        }// 异步调用cpp
        else if(languageType==='cpp'){
            const exec = require('child_process').exec;
            exec('javac ../EPIJudge-master/epi_judge_java_solutions/epi/AbsentValueArray.java',function(error,stdout,stderr){
                if(error) {
                    console.info('stderr : '+stderr);
                }
                // console.log('exec: ' + stdout);
                result=stdout
                console.log('result',result)
                // res.send(result);

            })
        }

        // new Promise((resolve, reject)=>{
        //     exec('python ../EPIJudge-master/epi_judge_python_solutions/test.py', (error,stdout,stderr) =>{
        //         if(error){
        //             reject('fail')
        //         }
        //         console.log('exec: ' + stdout);
        //         result=stdout
        //         resolve('success')
        //     })
        // }).then(() => {
        //     console.log('Promise result')
        //     console.log(result)
        //     res.send(result);
        // }).catch((err) => {
        //     console.log(err)
        // })

        // req.body.文件
        // 文件键入判题器，返回结果记录在judge
        // 添加到数据库
        //let isAdd = await submission.addSubmission(req.body)
        // res返回相关信息，包括 是否接受，内存信息，运行时间，错误原因
        //res.send(isAdd)


    } catch (e) {
        res.send(e);
    }
})



// 给前端显示预留
router.post('/reserve', async (req, res, next) => {
    let language=req.body.language //选用语言
    console.log(language)
    let title=req.body.title //题目名
    let result = await submission.showTitle(language,title);
    console.log(result)
    let filePath=''
    if (req.body.language==='Python'){
        filePath='../EPIJudge-master/epi_judge_python'+'/'+result[0].python + '.py'

    }else if(req.body.language==='Java'){
        filePath='../EPIJudge-master/epi_judge_java'+'/epi/'+result[0].java + '.java'

    }else if(req.body.language==='C++'){
        filePath='../EPIJudge-master/epi_judge_cpp'+'/'+result[0].cpp + '.cc'
        console.log(filePath)
    }
    try {
        var data = fs.readFileSync(filePath);
        console.log(data)
        res.send(data)
    } catch (e) {
        res.send(e);
    }
})

// 处理查询记录请求
router.post('/searchSubmission', async (req, res, next) => {
    // 异步调用py
    // const exec = require('child_process').exec;
    // exec('python ../EPIJudge-master/epi_judge_python_solutions/test.py',function(error,stdout,stderr){
    //     if(error) {
    //         console.info('stderr : '+stderr);
    //     }
    //     console.log('exec: ' + stdout);
    // })
    try {
        let result = await submission.searchSubmission(req.body.ID);
        res.send(result)

    } catch (e) {
        res.send(e);
    }
})

module.exports = router;
