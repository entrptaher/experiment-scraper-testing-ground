const crypto = require('crypto');

exports.getInfo = (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const hash = crypto
    .createHash('md5')
    .update('cookie')
    .digest('hex');

  res.cookie('auth', hash, { maxAge: 900000, httpOnly: false });
  res.cookie('TestingGround', 'WebScraperTest', {
    maxAge: 900000,
    httpOnly: false
  });

  return res.json({
    ip,
    hostname: req.hostname,
    referer: req.headers.host,
    agent: req.useragent.source,
    cookies: req.cookies
  });
};
