const express = require('express');
const { recaptchaChecker } = require('../controllers/captcha-controller');
const {
	getInfo
	
} = require('../controllers/who-I-am');
const { catchErrors } = require('../handlers/errorHandler');
const { ajax } = require('../controllers/ajaxController');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'Ok' });
});

router.post('/subscribe', recaptchaChecker);

router.get('/ajax', ajax);

router.get('/userInfo', getInfo);

module.exports = router;
