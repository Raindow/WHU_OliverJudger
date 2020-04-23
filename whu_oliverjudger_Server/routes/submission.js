var express = require('express');
var router = express.Router();
let submission = require('../service/submission')


// 处理添加记录请求
router.post('/submission', async (req, res, next) => {
    try {
        // req.body.文件
        // 文件键入判题器，返回结果记录在judge
        // 添加到数据库
        let isAdd = await submission.addSubmission(req.body)
        // res返回相关信息，包括 是否接受，内存信息，运行时间，错误原因
        res.send(isAdd)
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
