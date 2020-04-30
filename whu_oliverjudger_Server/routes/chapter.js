let express = require('express');
let router = express.Router();
let chapter = require('../service/chapter')

router.get('/showChapterList', async (req, res, next) => {
    console.log('showChapterList');
    try {
        let result = await chapter.showChapterList(req.query.chapter);
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/showAllList', async (req, res, next) => {
    console.log('showAllList');
    try {
        let result = await chapter.showChapterAllList();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/chapterProblem', async (req, res, next) => {
    console.log(req.query.chapter)
    console.log('chapterProblem')
    try {
        let result = await chapter.preview(req.query.chapter);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
})


module.exports = router;
