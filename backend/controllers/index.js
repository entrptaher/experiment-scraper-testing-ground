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
  const html = '<ul><li>Tom</li><li>Andrew</li><li>Bob</li></ul>';
  const xml = '<?xml version="1.0"?><names><name>Justin</name><name>Rebecca</name><name>Stephen</name></names>';
  switch (mode) {
    case 'html':
      res.set('Content-Type', 'text/html');
      return res.send(new Buffer.from(html));
    case 'xml':
      res.set('Content-Type', 'text/xml');
      return res.send(xml);
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
  const { SECRET_KEY } = process.env;
  const URL = `https://google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captcha}&remoteip=${remoteAddress}`;

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
