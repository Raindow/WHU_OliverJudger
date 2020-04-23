var express = require('express');
var router = express.Router();
let submission = require('../service/submission')


// 处理添加记录请求
router.post('/addSubmission', async (req, res, next) => {
    try {
        let isAdd = await submission.addSubmission(req.body)
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
