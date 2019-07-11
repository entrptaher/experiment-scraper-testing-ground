import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

class ReCaptcha extends Component {
  state = {
    captcha: ''
  };

  onChange = value => {
    this.setState({
      captcha: value
    });
  };

  sendRequest = e => {
    const { captcha } = this.state;
    fetch(`${process.env.REACT_APP_SERVER}/subscribe`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ captcha: captcha })
    })
      .then(res => res.json())
      .then(({ success, msg }) => {
        if (success) {
          toast.success(msg);
        } else {
          toast.error(msg);
        }
      });
  };

  render() {
    const { captcha } = this.state;
    return (
      <div className="container">
        <div className="recaptcha">
          <h1 className="title">ReCAPTCHA</h1>
          <hr className="line" />
        </div>

        <ReCAPTCHA
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          onChange={this.onChange}
        />

        {captcha && (
          <textarea
            className="area"
            name=""
            id=""
            cols="30"
            rows="5"
            readOnly
            value={captcha}
          />
        )}

        <button onClick={this.sendRequest} className="submit">
          Submit
        </button>
      </div>
    );
  }
}

export default ReCaptcha;
