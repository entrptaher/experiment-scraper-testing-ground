const request = require('request');
const crypto = require('crypto');

exports.ajax = async (req, res) => {
  // Access the provided 'mode' query parameters
  const { mode } = req.query;
  const data = [
    {
      name: 'George',
    },
    {
      name: 'Eric',
    },
    {
      name: 'Alice',
    },
  ];
  switch (mode) {
    case 'html':
      res.set('Content-Type', 'text/html');
      return res.send(new Buffer('<ul><li>Tom</li><li>Andrew</li><li>Bob</li></ul>'));
    case 'xml':
      res.set('Content-Type', 'text/xml');
      return res.send(
        '<?xml version="1.0"?><names><name>Justin</name><name>Rebecca</name><name>Stephen</name></names>',
      );
    case 'json':
      return res.json(data);
    default:
      return res.json({ message: 'Please select a mode you want to fetch' });
  }
};

exports.recaptchaChecker = (req, res) => {
  const { captcha } = req.body;
  if (captcha === undefined || captcha === '' || captcha === null) {
    return res.json({ success: false, msg: 'Please Select Captcha' });
  }
  const secretKey = process.env.SECRET_KEY;
  const URL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${
    req.connection.remoteAddress
  }`;

  return request(URL, (err, response, body) => {
    const parsedBody = JSON.parse(body);
    if (parsedBody.success !== undefined && !parsedBody.success) {
      return res.json({ success: false, msg: 'Failed captcha verification' });
    }
    return res.json({ success: true, msg: 'Captcha passed' });
  });
};

exports.getInfo = (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const hash = crypto
    .createHash('md5')
    .update('cookie')
    .digest('hex');

  res.cookie('auth', hash, { maxAge: 900000, httpOnly: false });
  res.cookie('TestingGround', 'WebScraperTest', {
    maxAge: 900000,
    httpOnly: false,
  });

  return res.json({
    ip,
    hostname: req.hostname,
    referer: req.headers.host,
    agent: req.useragent.source,
    cookies: req.cookies,
  });
};
