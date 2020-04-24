let express = require('express');
let router = express.Router();
let course = require('../service/course')

// 某一课程的所有chapter
router.get('/showCourseList', async (req, res, next) => {
    console.log('showCourseList');
    try {
        let result = await course.showCourseChapterList(req.query.course);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/showAllList', async (req, res, next) => {
    console.log('showAllList');
    try {
        let result = await course.showCourseChapterAllList();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

// /showCourseAllList 用来课程首页课程的对外展示
router.get('/showCourseAllList', async (req, res, next) => {
    console.log('showAllList');
    try {
        let result = await course.showAllCourseBase();
        console.log('课程首页数据展示完成')
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});


module.exports = router;
