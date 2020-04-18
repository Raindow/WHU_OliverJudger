let express = require('express');
let router = express.Router();
let course = require('../service/course')

router.get('/showCourseList', async (req, res, next) => {
    console.log(req.query.course)
    console.log('showCourseList');
    try {
        let result = await course.showCourseChapterList(req.query.course);
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/showAllList', async (req, res, next) => {
    console.log('showAllList');
    try {
        let result = await course.showCourseChapterAllList();
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/showCourseAllList', async (req, res, next) => {
    console.log('showAllList');
    try {
        let result = await course.showAllCourseBase();
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});


module.exports = router;
