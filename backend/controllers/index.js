const request = require('request');

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
  const {
    connection: { remoteAddress },
    body: { captcha },
  } = req;
  
  if (!captcha) {
    return res.json({ success: false, msg: 'Please Select Captcha' });
  }
  const secretKey = process.env.SECRET_KEY;
  const URL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${remoteAddress}`;

  return request(URL, (err, response, body) => {
    const { success } = JSON.parse(body);
    if (!success) {
      return res.json({ success: false, msg: 'Failed captcha verification' });
    }
    return res.json({ success: true, msg: 'Captcha passed' });
  });
};

exports.getInfo = (req, res) => {
  const {
    connection: { remoteAddress },
    headers,
    hostname,
    useragent: { source },
    cookies,
  } = req;
  const ip = headers['x-forwarded-for'] || remoteAddress;
  return res.json({
    ip,
    hostname,
    referer: headers.host,
    agent: source,
    cookies,
  });
};
