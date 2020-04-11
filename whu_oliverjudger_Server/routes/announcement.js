let express = require('express');
let router = express.Router();
let announcement = require('../service/announcement')

/* GET users listing. */
router.get('/show', async (req, res, next) => {
    console.log('show');
    try {
        let result = await announcement.show();
        res.json(result);
    } catch (e) {
        res.send(e);
    }
});

router.post('/showAttr', async (req, res, next) => {
    console.log('showAttr');
    try {
        let result = await announcement.showAttr(req.body.attr);
        res.json(result);
    } catch (e) {
        res.send(e);
    }
})

module.exports = router;
