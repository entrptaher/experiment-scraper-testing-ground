

exports.getInfo = (req,res) => {
	const info = {
		ip: req.connection.remoteAddress,
		hostname: req.hostname,
		referer: req.headers.host,
		agent: req.useragent.source
	}

	res.json({
		ip: info.ip,
		hostname: info.hostname,
		referer: info.referer,
		agent: info.agent
	})
}
