import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import '../css/text-list.css';

class TextList extends Component {
	state = {};
	render() {
		return (
			<div className="wrapper">
				<div className="text-list">
					<h1 className="title mb-16">TEXT LIST</h1>
					<p className="mb-16">
						Some web publishers do not trouble themselves by formatting their
						data using HTML elements and often simply put information on their
						web site as a plain text. What is even worse, they sometimes add
						supplementary notes in the same manner as the main information
						making it harder to separate them. But a good web scraper should
						overcome all these obstacles.
					</p>

					<p className="mb-16">
						In this test, the web scraper needs to scrape a list of US cities
						with their population organized as a simple text. Specifically, it
						has to:
					</p>

					<ol className="mb-16 list">
						<li>
							Extract all the cities and their population, while skipping all
							the notes
						</li>
						<li>Scrape cities with their notes (if any)</li>
						<li>Scrape bold cities (with their population) only</li>
					</ol>

					<p className="mb-16">
						There is a ver parameter (which varies from 1 to 5) to show
						different list versions (with different city numbers, bold cities
						and their notes).
					</p>

					<p className="mb-16">
						For testing, you may use the following sample links. The scraper
						should sufficiently scrape all data from any link using the same
						project:
					</p>

					<ul className="list mb-32">
						<Link to="/textlist/textlist1">
							<li>Text list 1</li>
						</Link>

						<Link to="/textlist/textlist2">
							<li>Text list 2</li>
						</Link>

						<Link to="/textlist/textlist3">
							<li>Text list 3</li>
						</Link>

						<Link to="/textlist/textlist4">
							<li>Text list 4</li>
						</Link>

						<Link to="/textlist/textlist5">
							<li>Text list 5</li>
						</Link>
					</ul>

					<div className="population">
						<h3 className="child uppercase">City</h3>
						<h3 className="child uppercase">Population</h3>
					</div>
					<hr className="hr" />

					<div className="population">
						<p className="child text-list">New York</p>
						<p className="child text-list space">8,244,910</p>
					</div>

					<p>(City of New York)</p>

					<div className="population">
						<h3 className="child">Los Angeles</h3>
						<h3 className="child space">3,819,702</h3>
					</div>

					<div className="population">
						<p className="child text-list">Chicago</p>
						<p className="child space text-list">2,707,120</p>
					</div>
					<p>change: +0.43%</p>

					<div className="population">
						<h3 className="child">Houston</h3>
						<h3 className="child space">2,145,146</h3>
					</div>

					<div className="population">
						<p className="child text-list">Philadelphia</p>
						<p className="child space text-list">1,536,471</p>
					</div>
					<p>(City of Philadelphia)</p>
					<div className="population mb-48">
						<p className="child text-list">Phoenix</p>
						<p className="child space text-list">1,469,471</p>
					</div>
				</div>
			</div>
		);
	}
}

export default TextList;