const express = require('express');
const router = express.Router();
let submission = require('../service/submission');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

// 处理添加记录请求
router.post('/submit', upload.single('file'), async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.file)
        // req.body.文件
        // 文件键入判题器，返回结果记录在judge
        // 添加到数据库
        //let isAdd = await submission.addSubmission(req.body)
        // res返回相关信息，包括 是否接受，内存信息，运行时间，错误原因
        //res.send(isAdd)

        res.send('a')
    } catch (e) {
        res.send(e);
    }
})

// 处理查询记录请求
router.post('/searchSubmission', async (req, res, next) => {
    // 异步调用py
    const exec = require('child_process').exec;
    exec('python ./epi_judge_python_solutions/a_b_sqrt2.py',function(error,stdout,stderr){
        if(error) {
            console.info('stderr : '+stderr);
        }
        console.log('exec: ' + stdout);
    })
    try {
        let result = await submission.searchSubmission(req.body.ID);
        res.send(result)

    } catch (e) {
        res.send(e);
    }
})

module.exports = router;
