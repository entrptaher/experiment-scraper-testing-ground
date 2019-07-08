import React, { Component } from 'react';
import '../css/invalid-html.css';

class InvalidHtml extends Component {
	state = {};
	render() {
		return (
			<div className="wrapper">
				<div className="invalid">
					<h1 className="title mb-16">INVALID HTML</h1>
					<p className="mb-16">
						It's obvious that not every web publisher pays much attention to
						validity of his HTML code. Though most of the browsers are able to
						digest a broken markup, when you do web scraping some mistakes in
						web pages may result in scraping errors preventing you from getting
						relevant results.
					</p>

					<p className="mb-16">
						To test web scrapers against invalid markup we suggest scraping this
						page that contains the following markup mistakes:
					</p>

					<ol className="list mb-16">
						<li>
							Unescaped characters(<b>&amp;</b> and <b>&gt;</b> instead of
							<b>&amp;amp;</b> and <b>&gt;gt;</b> )
						</li>
						<li>
							Non-HTML tags (<b>&lt;nonTHTML&gt;</b>)
						</li>
						<li>
							Unclosed tags (<b>&lt;span&lt;span/&gt;</b>)
						</li>

						<li>
							Unmatched quotes (<b>&lt;a href="scrapetools.com'&gt;</b>)
						</li>
						<li>
							Missed spaces (<b>&lt;a id="test"href="scrapetools.com"&gt;</b>)
						</li>
						<li>
							Invalid tag nesting (
							<b>&lt;div&gt;&lt;span&gt;&lt;/div&gt;&lt;/span&gt;</b>)
						</li>
						<li>
							The charset specified in META tag or HTTP header in does not match
							the real document encoding
						</li>
					</ol>

					<p className="mb-16">
						In other words, after scraping the invalid HTML presented below the
						scraper should output the following values:
					</p>

					<ul className="mb-16 list">
						<li>2&gt;1 &amp; 1&lt;2</li>
						<li>nonHTML</li>
						<li>unclosed</li>
						<li>scrapetools.com</li>
						<li>millepah.com</li>
						<li>bad nesting</li>
						<li>проверка (windows-1251) wrong meta</li>
						<li>проверка (utf-8) wrong heade</li>
					</ul>

					<h3 className="mb-16">Here is the invalid HTML itself:</h3>

					<div className="invalid-data">
						<div className="child-data">2&gt;1 &amp; 1&lt;2</div>
						<div className="child-data">non<nonhtml>HTML</nonhtml></div>
						<div className="child-data">unclosed</div>
						<div className="child-data">scrapetools.com</div>
						<div className="child-data">millepah.com</div>
						<div className="child-data">bad nesting</div>
						<div className="child-data">проверка (windows-1251) wrong meta</div>
						<div className="child-data">проверка (utf-8) wrong header</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InvalidHtml;
