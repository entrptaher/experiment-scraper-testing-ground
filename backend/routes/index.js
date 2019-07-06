const express = require('express');
const { recaptchaChecker } = require('../controllers/captcha-controller');
const { ajax } = require('../controllers/ajaxController');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'Ok' });
});

router.post('/subscribe', recaptchaChecker);
router.get('/ajax', ajax);

module.exports = router;
