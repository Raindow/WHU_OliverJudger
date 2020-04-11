let express = require('express');
let router = express.Router();
let announcement = require('../service/announcement')

/* GET users listing. */
router.get('/showDetail', async (req, res, next) => {
    console.log(req.query.title)
    console.log('showDetail');
    try {
        let result = await announcement.showDeail(req.query.title);
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.get('/showList', async (req, res, next) => {
    console.log(req.query.title)
    console.log('showList');
    try {
        let result = await announcement.showList();
        console.log(result)
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.post('/showAttr', async (req, res, next) => {
    console.log('showAttr');
    try {
        let result = await announcement.showAttr(req.body.attr);
        res.send(result);
    } catch (e) {
        res.send(e);
    }
})

module.exports = router;
