import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="items">
          <div className="item">
            <Link to="/table">
              <h3>TABLE REPORT</h3>
            </Link>
            <p>Simulates complicated financial table report</p>
          </div>
          <div className="item">
            <Link to="/block">
              <h3>BLOCKS: Price list</h3>
            </Link>
            <p>complicated block layout presented as a price list</p>
          </div>
          <div className="item">
            <Link to="/textlist">
              <h3>TEXT LIST</h3>
            </Link>
            <p>list of items organized as a simple text</p>
          </div>
          <div className="item">
            <Link to="/invalid">
              <h3>INVALID HTML</h3>
            </Link>
            <p>HTML with markup errors</p>
          </div>
          <div className="item">
            <Link to="/login">
              <h3>LOGIN</h3>
            </Link>
            <p>Form-based authentication via post method</p>
          </div>
          <div className="item">
            <Link to="/ajax">
              <h3>AJAX</h3>
            </Link>
            <p>Receiving HTML, XML and JSON via AJAX</p>
          </div>
          <div className="item">
            <Link to="/captcha">
              <h3>CAPTCHA</h3>
            </Link>
            <p>CAPTCHA recognition</p>
          </div>
          <div className="item">
            <Link to="/whoami">
              <h3>WHO AM I</h3>
            </Link>
            <p>Shows web client information</p>
          </div>
          <div className="item">
            <Link to="/recaptcha">
              <h3>RECAPTCHA</h3>
            </Link>
            <p>ReCaptcha Solution</p>
          </div>

          <div className="blur">
            <Link to="/popups">
              <h3>POPUPS</h3>
            </Link>
          </div>
          <div className="blur">
            <Link to="/images">
              <h3>IMAGES</h3>
            </Link>
          </div>
          <div className="blur">
            <Link to="/frames">
              <h3>FRAMES</h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
