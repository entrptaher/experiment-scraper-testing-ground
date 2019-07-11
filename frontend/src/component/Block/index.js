import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Block5 from './Block5';
import MainBlock from './MainBlock';

export default function index({ location: { search } }) {
	const { ver } = queryString.parse(search);
	let block;
	switch (ver) {
		case '1':
			block = <Block1 />;
			break;
		case '2':
			block = <Block2 />;
			break;
		case '3':
			block = <Block3 />;
			break;
		case '4':
			block = <Block4 />;
			break;
		case '5':
			block = <Block5 />;
			break;
		default:
			block = <Block1 />;
			break;
	}

	return (
		<div className="wrapper block">
			<h1 className="title mb-16">
				BLOCKS: Price List {ver && `(version ${ver})`}
			</h1>
			<p className="mb-16">
				In this test, the web scraper needs to scrape a price list organized in
				a block layout. Specifically, it has to:
			</p>
			<ol className="list mb-16">
				<li>
					Extract all the products (their names, descriptions and prices), while
					skipping advertisements
				</li>
				<li>Scrape discounted products only</li>
				<li>Scrape products with red prices only</li>
			</ol>
			<p className="mb-16">
				There is a <b>ver</b> parameter (which varies from 1 to 5) to show
				different table versions (with different product numbers, best price and
				advertisement positions).
			</p>
			<p className="mb-16">Also there are two tables presented:</p>
			<ul className="list mb-16">
				<li>
					<b>Case 1</b> (simple one, with products and prices placed into the
					same block)
				</li>
				<li>
					<b>Case 2</b> (complicated one, with products and prices placed into
					separate blocks)
				</li>
			</ul>
			<p className="mb-16">
				For testing, you may use the following sample links. The scraper should
				sufficiently scrape all data from a certain case using the same project:
			</p>

			<ul className="list mb-16">
				<Link to="/block?ver=1">
					<li>Price List 1</li>
				</Link>

				<Link to="/block?ver=2">
					<li>Price List 2</li>
				</Link>

				<Link to="/block?ver=3">
					<li>Price List 3</li>
				</Link>

				<Link to="/block?ver=4">
					<li>Price List 4</li>
				</Link>

				<Link to="/block?ver=5">
					<li>Price List 5</li>
				</Link>
			</ul>
			<div className="cases">{block}</div>
		</div>
	);
}
