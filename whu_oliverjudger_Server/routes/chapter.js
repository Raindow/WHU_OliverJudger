let express = require('express');
let router = express.Router();
let chapter = require('../service/chapter')

// 用于获取某一课程某一chapter的所有小章节即SideBar的内容填充
router.get('/showChapterList', async (req, res, next) => {
    try {
        let result = await chapter.showChapterList(req.query.chapter);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});



router.get('/chapterProblem', async (req, res, next) => {
    try {
        let result = await chapter.preview(req.query.chapter);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
})


module.exports = router;
