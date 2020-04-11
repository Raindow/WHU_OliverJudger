let express = require('express')
let router = express.Router();
let problems = require('../service/problems')

router.get('/', async (req, res, next) => {
  try {
    let result = await problems.preview();
    res.json(result);
  } catch (e) {
    res.send(e);
  }
})

router.get('/detail', async (req, res, next) => {
  try {
    let param = req.query;
    console.log(param);
    console.log(param.key);
    let result = await problems.detail(param.title);
    res.json(result);
  } catch (e) {
    res.send(e);
  }
})

module.exports = router;
