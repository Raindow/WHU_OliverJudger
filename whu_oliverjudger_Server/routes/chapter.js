let express = require('express');
let router = express.Router();
let course = require('../service/chapter')

router.get('/showChapterList', async (req, res, next) => {
    console.log('showChapterList');
    try {
        let result = await course.showChapterList(req.query.chapter);
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/showAllList', async (req, res, next) => {
    console.log('showAllList');
    try {
        let result = await course.showChapterAllList();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});


module.exports = router;
