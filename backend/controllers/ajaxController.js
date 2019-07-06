const request = require('request');

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

module.exports = { ajax };
