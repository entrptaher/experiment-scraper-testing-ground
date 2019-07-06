exports.getIp = (req, res) => {
	const ip = req.connection.remoteAddress;
	return res.json({ msg: ip });
};

exports.getHost = (req, res) => {
	const { hostname } = req;
	return res.json({ msg: hostname });
};

exports.getReferer = (req, res) => {
	const referer = req.headers.host;
	return res.json({ msg: referer });
};

exports.getUserAgent = (req, res) => {
	return res.json({ msg: req.useragent.source });
};

exports.getCookies = (req, res) => {
	return res.json({ msg: req.cookies.token });
};
