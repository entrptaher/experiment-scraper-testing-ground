const express = require('express');
const { recaptchaChecker } = require('../controllers/captcha-controller');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'Ok' });
});

// router.get('/recaptcha', (req, res) => {
// 	res.render('recaptcha');
// });

router.post('/subscribe', recaptchaChecker);

module.exports = router;
