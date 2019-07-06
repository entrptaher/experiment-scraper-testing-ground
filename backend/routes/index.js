const express = require('express');
const { recaptchaChecker } = require('../controllers/captcha-controller');
const {
	getIp,
	getHost,
	getReferer,
	getUserAgent,
	getCookies
} = require('../controllers/who-I-am');
const { catchErrors } = require('../handlers/errorHandler');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'Ok' });
});

router.post('/subscribe', recaptchaChecker);

router.get('/ip', getIp);

router.get('/host', getHost);

router.get('/referer', getReferer);

router.get('/agent', getUserAgent);

router.get('/cookies', getCookies);

module.exports = router;
