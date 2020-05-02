/*
 * course.js
 * 用于处理course的请求，以及对应的chapter的部分请求
 */
let express = require('express');
let router = express.Router();
let course = require('../service/course')

// 某一课程的所有chapter
router.get('/showCourseList', async (req, res, next) => {
    try {
        let result = await course.showCourseChapterList(req.query.course);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});
// 展示课程各个章节的信息
router.get('/showAllList', async (req, res, next) => {
    try {
        let result = await course.showCourseChapterAllList();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

// /showCourseAllList 用来课程首页课程的对外展示
router.get('/showCourseAllList', async (req, res, next) => {
    try {
        let result = await course.showAllCourseBase();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});


module.exports = router;
