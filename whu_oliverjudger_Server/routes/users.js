var express = require('express');
var router = express.Router();
let users = require('../service/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 处理登录请求
router.post('/login', async (req, res, next) => {
  console.log(req.body.ID)
  console.log(req.body.password)
  try {
    let result = await users.verifyLogin(req.body.ID,req.body.password);
    res.send(result)
  } catch (e) {
    res.send(e);
  }
})



module.exports = router;
