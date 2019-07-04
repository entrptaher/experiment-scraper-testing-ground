const request = require('request');

const recaptchaChecker = (req, res) => {
	const { captcha } = req.body;
	if (captcha === undefined || captcha === '' || captcha === null) {
		return res.json({ success: false, msg: 'Please Select Captcha' });
	}
	const secretKey = process.env.SECRET_KEY;
	const URL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req.connection.remoteAddress}`;

	request(URL, (err, response, body) => {
		body = JSON.parse(body);
		if (body.sucess !== undefined && !body.sucess) {
			return res.json({ success: false, msg: 'Failed captcha verificaion' });
		}
		return res.json({ success: true, msg: 'Captcha passed' });
	});
};

// const recaptchaChecker = (req, res) => {
// 	const { captcha } = req.body;

// 	if (captcha === undefined || captcha === '' || captcha === null) {
// 		return res.json({ success: false, msg: 'Please Select Captcha' });
// 	}
// 	const secretKey = '6LeLQKsUAAAAAGAqmVkJtxNCR472fFcnQ4iXMpFQ';
// 	const URL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${req.connection.remoteAddress}`;

// 	request(URL, (err, response, body) => {
// 		body = JSON.parse(body);
// 		if (body.sucess) {
// 			return res.json({ msg: 'DHUR' });
// 		}
// 		return res.json({ msg: 'Ki nokol, kisher nokol' });
// 	});
// };

module.exports = { recaptchaChecker };
