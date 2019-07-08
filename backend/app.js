require('dotenv').config();
const express = require('express');
const cors = require('cors');
const useragent = require('express-useragent');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const router = require('./routes/index');

const errorHandlers = require('./handlers/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(cookieParser());
app.use(useragent.express());
app.use('/', router);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// set some fake cookies

app.use((req, res, next) => {
  const hash = crypto
    .createHash('md5')
    .update('cookie')
    .digest('hex');
  res.cookie('auth', hash, { maxAge: 900000, httpOnly: false });
  res.cookie('TestingGround', 'WebScraperTest', {
    maxAge: 900000,
    httpOnly: false,
  });
  next();
});

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

app.listen(7777, () => {
  console.log('Server is listening on port 7777');
});
