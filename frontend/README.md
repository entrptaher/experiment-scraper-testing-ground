# ENVIRONMENT VARIABLES

Copy the content of `example.env` and paste into `.env` file.
```
cp example.env .env
```
This will create the `.env` file and copy the content of `example.env`

Now change those variables value
```
REACT_APP_SERVER=your backend server url
REACT_APP_CAPTCHA_SITE_KEY=your google captcha site key
```
[See the instruction to create google recaptcha site key](https://github.com/entrptaher/experiment-scraper-testing-ground/blob/master/README.md#creating-the-site-key-for-google-recaptcha)

in example 
```
REACT_APP_SERVER=http://localhost:4000
REACT_APP_CAPTCHA_SITE_KEY=abcdefgh
```