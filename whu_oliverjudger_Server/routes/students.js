var express = require('express');
var router = express.Router();
let students = require('../service/students')
/* GET students listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 处理登录请求
router.post('/login', async (req, res, next) => {
  try {
    let result = await students.verifyLogin(req.body.ID,req.body.password);
    res.send(result)
  } catch (e) {
    res.send(e);
  }
})

router.post('/register', async (req, res, next) => {
  try {
    let isExist = await students.isStudentExist(req.body.ID)
    if (!isExist){
      let result = await students.add(req.body.ID,req.body.password,req.body.stuName,req.body.major, req.body.email);
      res.send(result)
    }else {
      res.send('此用户已存在')
    }

  } catch (e) {
    res.send(e);
  }
})

router.get('/profile', async (req, res, next) => {
  console.log(req.query.chapter)
  console.log('studentprofile');
  try {
    let result = await students.showProfile(req.query.ID);
    console.log(result)
    res.json(result);
  } catch (e) {
    res.send(e);
  }
});


module.exports = router;
