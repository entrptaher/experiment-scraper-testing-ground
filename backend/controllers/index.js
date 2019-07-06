const request = require('request');

const recaptchaChecker = (req, res) => {
  const { captcha } = req.body;
  if (captcha === undefined || captcha === '' || captcha === null) {
    return res.json({ success: false, msg: 'Please Select Captcha' });
  }
  const secretKey = process.env.SECRET_KEY;
  const URL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${
    req.connection.remoteAddress
  }`;

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

const ajax = async (req, res) => {
  // Access the provided 'mode' query parameters
  let { mode } = req.query;
  switch (mode) {
    case 'html':
      res.set('Content-Type', 'text/html');
      res.send(new Buffer('<ul><li>Tom</li><li>Andrew</li><li>Bob</li></ul>'));
      break;
    case 'xml':
      res.set('Content-Type', 'text/xml');
      res.send(
        '<?xml version="1.0"?><names><name>Justin</name><name>Rebecca</name><name>Stephen</name></names>'
      );
      break;
    case 'json':
      const data = [
        {
          name: 'George'
        },
        {
          name: 'Eric'
        },
        {
          name: 'Alice'
        }
      ];
      res.json(data);
      break;
    default:
      return res.json({ message: 'Please select a mode you want to fetch' });
      break;
  }
};

module.exports = { recaptchaChecker, ajax };
