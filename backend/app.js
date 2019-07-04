const express = require('express');
const path = require('path');
const cors = require('cors');
const doenv = require('dotenv');
const router = require('./routes/index');
const errorHandlers = require('./handlers/errorHandler');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', router);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
	/* Development Error Handler - Prints stack trace */
	app.use(errorHandlers.developmentErrors);
}

// app.get('/', (req, res) => {
//   res.sendFile('recaptcha.html', { root: '../experiment-scraper-testing-ground' });
// });

// app.post('/subscribe', (req, res) => {
//   const { captcha } = req.body;
//   if (captcha === undefined || captcha === '' || captcha === null) {
//     return res.json({ success: false, msg: 'Please Select Captcha' });
//   }
//   const secretKey = '6LeLQKsUAAAAAGAqmVkJtxNCR472fFcnQ4iXMpFQ';
//   const URL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}&remoteip=${
//     req.connection.remoteAddress
//   }`;

//   request(URL, (err, response, body) => {
//     body = JSON.parse(body);
//     if (body.sucess !== undefined && !body.sucess) {
//       return res.json({ success: false, msg: 'Failed captcha verificaion' });
//     }
//     return res.json({ success: true, msg: 'Captcha passed' });
//   });
// });

app.listen(7777, () => {
	console.log('Server is listening on port 7777');
});
