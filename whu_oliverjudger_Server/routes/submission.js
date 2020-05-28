const express = require('express');
const router = express.Router();
let submission = require('../service/submission');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        let filePath=''
        if (req.body.language==='py'){
            filePath='../EPIJudge-master/epi_judge_python_solutions'
        }else if(req.body.language==='java'){
            filePath='../EPIJudge-master/epi_judge_java_solutions'+'/epi'
        }else if(req.body.language==='cpp'){
            filePath='../EPIJudge-master/epi_judge_cpp_solutions'
        }
        console.log('fileRoot',filePath)
        // return filePath
        callback(null,filePath);
    },

    filename: async function (req, file, callback) {

        let result = await submission.showTitle(req.body.language,req.body.title);
        let finalName=''
        if (req.body.language==='py'){
            finalName=result[0].python+'.'+req.body.language
        }else if(req.body.language==='java'){
            finalName=result[0].java+'.'+req.body.language
        }else if(req.body.language==='cpp'){
            finalName=result[0].cpp+'.'+'cc'
        }
        console.log('finalName', finalName)

        // let finalName = 'test' + '.' + req.body.language

        callback(null,  finalName);

    }
})
const upload = multer({storage: storage});

// 处理添加记录请求
router.post('/submit', upload.single('file'), async (req, res, next) => {
    try {

        let languageType=''
        let filePath=''

        let finalName=''
        //将在线编写代码转化为文件 保存其信息
        if(req.body.content){

            let fileNames = await submission.showTitle(req.body.language,req.body.title);

            if (req.body.language==='py'){
                finalName=fileNames[0].python+'.'+req.body.language
                filePath='../EPIJudge-master/epi_judge_python_solutions'+'/'+finalName
                languageType='python'
            }else if(req.body.language==='java'){
                finalName=fileNames[0].java+'.'+req.body.language
                filePath='../EPIJudge-master/epi_judge_java_solutions'+'/epi/'+finalName
                languageType='java'
            }else if(req.body.language==='cpp'){
                finalName=fileNames[0].cpp+'.'+'cc'
                filePath='../EPIJudge-master/epi_judge_cpp_solutions'+'/'+finalName
                languageType='cpp'
            }

            fs.writeFile(filePath, req.body.content, (err) =>{
                if(err) {
                    console.log(err);
                }else {
                    console.log('write file success');
                }
            })
        }

        //获取上传文件信息
        if (filePath===''){
            console.log('upload',req.file.filename)
            const path = require('path');
            let extname = path.extname(req.file.filename);
            if (extname==='.py'){
                finalName=req.file.filename
                languageType='python'
            }else if(extname==='.java'){
                finalName=req.file.filename
                languageType='java'
            }else if(extname==='.cpp' || extname==='.cc'){
                finalName=req.file.filename
                languageType='cpp'
            }

        }
        console.log('languageType',languageType)

        // 异步调用py
        exec = require('child_process').exec;
        if (languageType==='python'){
            exec('python ../EPIJudge-master/epi_judge_python_solutions/'+ finalName,function(error,stdout,stderr){
                if(error) {
                    // console.info('stderr : '+stderr);
                    console.log('stderr',error)
                    let data={
                        studentID: req.body.ID ,
                        submissionTime:Date.now(),
                        submissionStatus:0,
                        problemName:req.body.title,
                        usingTime:0,
                        usingLanguage:req.body.language,
                        failReason:stderr
                    }
                    let a = submission.addSubmission(data)
                    console.log(a)
                    res.send(stderr);
                }
                else {
                    console.log('stdout',stdout)
                    stdout=stdout.replace(new RegExp('\'','g'), '"')
                    let isPassed = stdout.includes('You\"ve passed ALL tests');
                    // console.log('result',result)
                    let data={
                        studentID: req.body.ID ,
                        submissionTime:Date.now(),
                        submissionStatus:isPassed?1:0,
                        problemName:req.body.title,
                        usingTime:isPassed?stdout.match(/Median running time(.*?)\n/g)[0].split(':')[1]:0,
                        usingLanguage:req.body.language,
                        failReason:isPassed?0:stdout
                    }
                    let a = submission.addSubmission(data)
                    console.log(a)
                    if (isPassed){
                        res.send('You have passed ALL tests');
                    }else {
                        res.send(stdout);
                    }
                }
            })
        }// 异步调用java
        else if(languageType==='java'){
            // finalName='Anagrams.java'
            let cmd='cd ../EPIJudge-master/epi_judge_java_solutions && javac ./epi/'+finalName+ ' && java epi.'+ finalName.split('.')[0];
            exec(cmd ,function(error,stdout,stderr){
                if(error) {
                    console.log('stderr',error)
                    let data={
                        studentID: req.body.ID ,
                        submissionTime:Date.now(),
                        submissionStatus:0,
                        problemName:req.body.title,
                        usingTime:0,
                        usingLanguage:req.body.language,
                        failReason:stderr
                        // failReason:isPassed?0:result.replace('\'', '"')
                    }
                    let a = submission.addSubmission(data)
                    console.log(a)
                    res.send(stderr);
                }
                else{
                    console.log('stdout',stdout)
                    stdout=stdout.replace(new RegExp('\'','g'), '"')
                    let isPassed = stdout.includes('You\"ve passed ALL tests');
                    // console.log('result',result)
                    let data={
                        studentID: req.body.ID ,
                        submissionTime:Date.now(),
                        submissionStatus:isPassed?1:0,
                        problemName:req.body.title,
                        usingTime:isPassed?stdout.match(/Median running time(.*?)\n/g)[0].split(':')[1]:0,
                        usingLanguage:req.body.language,
                        failReason:isPassed?0:stdout
                    }
                    let a = submission.addSubmission(data)
                    console.log(a)
                    if (isPassed){
                        res.send('You have passed ALL tests');
                    }else {
                        res.send(stdout);
                    }

                }

            })
        }// 异步调用cpp
        else if(languageType==='cpp'){
            let temp=finalName.split('.')[0]
            var cmd = 'cd ../EPIJudge-master/epi_judge_cpp_solutions && cmake . && cmake --build ./ --target '+temp+' && cd debug && '+temp+'.exe'
            exec(cmd ,function(error,stdout,stderr){
                if(error) {
                    console.log('stderr',error)
                    let data={
                        studentID: req.body.ID ,
                        submissionTime:Date.now(),
                        submissionStatus:0,
                        problemName:req.body.title,
                        usingTime:0,
                        usingLanguage:req.body.language,
                        failReason:stderr
                    }
                    let a = submission.addSubmission(data)
                    console.log(a)
                    res.send(stderr);
                }
                else{
                    console.log('stdout',stdout)
                    stdout=stdout.replace(new RegExp('\'','g'), '"')
                    let isPassed = stdout.includes('You\"ve passed ALL tests');
                    // console.log('result',result)
                    let data={
                        studentID: req.body.ID ,
                        submissionTime:Date.now(),
                        submissionStatus:isPassed?1:0,
                        problemName:req.body.title,
                        usingTime:isPassed?stdout.match(/Median running time(.*?)\n/g)[0].split(':')[1]:0,
                        usingLanguage:req.body.language,
                        failReason:isPassed?0:stdout
                    }
                    let a = submission.addSubmission(data)
                    console.log(a)
                    if (isPassed){
                        res.send('You have passed ALL tests');
                    }else {
                        res.send(stdout);
                    }
               }
            })
        }

    } catch (e) {
        res.send(e);
    }
})



// 给前端显示预留
router.post('/reserve', async (req, res, next) => {
    let language=req.body.language //选用语言
    // console.log(language)
    let title=req.body.title //题目名
    let result = await submission.showTitle(language,title);
    // console.log(result)
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
        // console.log(data)
        res.send(data)
    } catch (e) {
        res.send(e);
    }
})

// 处理查询记录请求
router.post('/searchSubmission', async (req, res, next) => {
    try {
        let result = await submission.searchSubmission(req.body.ID);
        res.send(result)

    } catch (e) {
        res.send(e);
    }
})

module.exports = router;
