const express = require('express');
const { recaptchaChecker, ajax } = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({ msg: 'Ok' });
});

// router.get('/recaptcha', (req, res) => {
// 	res.render('recaptcha');
// });

router.post('/subscribe', recaptchaChecker);
router.get('/ajax', ajax);

module.exports = router;
