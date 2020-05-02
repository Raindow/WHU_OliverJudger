/*
announcement.js 处理公告的信息
*/
let express = require('express');
let router = express.Router();
let announcement = require('../service/announcement')
/* /showDetail 为某一个具体的公告返回对应的信息*/
router.get('/showDetail', async (req, res, next) => {
    try {
        let result = await announcement.showDeail(req.query.title);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});
/* /showList 中为公告首页的信息列表服务*/
router.get('/showList', async (req, res, next) => {
    try {
        let result = await announcement.showList();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});



module.exports = router;
