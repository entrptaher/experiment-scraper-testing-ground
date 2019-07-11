import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Ajax extends Component {
  state = {
    html: '',
    xml: '',
    json: ''
  };
  componentDidMount() {
    this.fetchData('html');
  }
  getData = mode => {
    this.fetchData(mode);
  };
  fetchData = mode => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/ajax?mode=${mode}`)
      .then(res => this.setState({ [mode]: res.data }));
  };
  render() {
    const { html, xml, json } = this.state;
    return (
      <div className="wrapper">
        <div className="ajax">
          <h1 className="title mb-16">AJAX</h1>
          <p className="mb-16">
            Today many websites load their content using{' '}
            <Link
              to="https://en.wikipedia.org/wiki/Ajax_(programming)"
              target="_blank"
              rel="noopener noreferrer"
            >
              AJAX
            </Link>{' '}
            (Asynchronous JavaScript and XML). This often greatly improves user
            experience but also may become a stumbling block for some web
            scrapers. At the same time a good web scraper should be able to
            parse all major data formats that are used in AJAX technology:{' '}
            <Link
              to="http://en.wikipedia.org/wiki/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML
            </Link>
            ,{' '}
            <Link
              to="http://en.wikipedia.org/wiki/XML"
              target="_blank"
              rel="noopener noreferrer"
            >
              XML
            </Link>{' '}
            and{' '}
            <Link
              to="http://en.wikipedia.org/wiki/JSON"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSON
            </Link>
            .
          </p>
          <p className="mb-16">
            You may use this test to check scraper's ability to:
          </p>
          <ol className="list mb-16">
            <li>Receive HTML via AJAX and parse it</li>
            <li>Receive XML via AJAX and parse it</li>
            <li>Receive JSON via AJAX and parse it</li>
          </ol>
          <p className="mb-16">How does it work:</p>
          <ul className="list mb-16">
            <li>
              The browser receives three lists of three names through AJAX in
              three different formats: HTML, XML and JSON
            </li>
            <li>HTML data is received automatically as the page is loaded</li>
            <li>
              To receive XML and JSON data you need to click to a corresponding
              link
            </li>
            <li>The scraper should be able to extract all nine names</li>
          </ul>
        </div>
        <hr className="line" />
        <div className="html mb-32" id="case_ajax">
          <h4 className="mb-16">HTML</h4>
          <div
            id="ajaxHtml"
            className="case mb-32"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <h4 className="mb-16">XML</h4>
          <div id="ajaxXml" className="case html mb-32">
            <Link
              to="#"
              onClick={() => this.getData('xml')}
              style={{ display: xml ? 'none' : 'block' }}
            >
              Click to get XML through AJAX
            </Link>
            <div className="test" dangerouslySetInnerHTML={{ __html: xml }} />
          </div>
          <h4 className="mb-16">JSON</h4>
          <div id="ajaxJson" className="case json">
            <Link
              to="#"
              onClick={() => this.getData('json')}
              style={{ display: json ? 'none' : 'block' }}
            >
              Click to get JSON through JSON
            </Link>
            <div className="json">
              <ul>
                {json.length
                  ? json.map((e, i) => <li key={i}>{e.name}</li>)
                  : ''}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
