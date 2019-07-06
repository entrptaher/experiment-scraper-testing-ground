import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/ajax.css';

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
      .get(`/ajax?mode=${mode}`)
      .then(res => this.setState({ [mode]: res.data }));
  };
  render() {
    const { html, xml, json } = this.state;
    return (
      <div>
        <div id="content">
          <h1>AJAX</h1>
          <div id="caseinfo">
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
          </div>
          <p>You may use this test to check scraper's ability to:</p>
          <ol>
            <li>Receive HTML via AJAX and parse it</li>
            <li>Receive XML via AJAX and parse it</li>
            <li>Receive JSON via AJAX and parse it</li>
          </ol>
          <p>How does it work:</p>
          <ul>
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

        <hr />

        <div id="case_ajax">
          <h3>HTML</h3>
          <div
            id="ajaxHtml"
            className="case"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <h3>XML</h3>
          <div id="ajaxXml" className="case">
            <Link to="#" onClick={() => this.getData('xml')}>
              Click to get XML through AJAX
            </Link>
            <div dangerouslySetInnerHTML={{ __html: xml }} />
          </div>
          <h3>JSON</h3>
          <div id="ajaxJson" className="case">
            <Link to="#" onClick={() => this.getData('json')}>
              Click to get JSON through AJAX
            </Link>
            <div>
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
