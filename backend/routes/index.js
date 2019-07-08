const express = require('express');

const router = express.Router();
const { recaptchaChecker, getInfo, ajax } = require('../controllers');


router.get('/', (req, res) => {
  res.json({ msg: 'Ok' });
});

router.post('/subscribe', recaptchaChecker);

router.get('/ajax', ajax);

router.get('/userInfo', getInfo);

module.exports = router;
