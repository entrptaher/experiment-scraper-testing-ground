import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../css/table-report.css';
import '../../css/table1.css';

class Table1 extends Component {
	state = {};
	render() {
		return (
			<div className="wrapper">
				<div className="title mb-16">table-report</div>
				<div className="table-report">
					<p className="mb-16">
						Suppose you need to scrape a financial report organized as a table.
						This test checks the scraper's ability to:
					</p>
					<ol className="list mb-16">
						<li>Support tables with indefinite number of rows and columns</li>
						<li>Tolerate merged columns and rows</li>
						<li>Parse currency format</li>
						<li>Extract only a certain year</li>
					</ol>
					<p className="mb-16">
						To change the table you may use the following parameters:
					</p>
					<ul className="list mb-16">
						<li>
							<b>products</b> - number of products column(from 1 to 50)
						</li>
						<li>
							<b>years</b> - number of year sections in the report
						</li>
						<li>
							<b>quarters</b> - number of quarters in the last year
						</li>
					</ul>
					<p>
						There should be a one year section with a merged column (for Product
						3), and if more than one year are shown, there should be one or more
						merged cells in some quarter rows (for Products 1 and 2). All merged
						cells in the report contain a hyphen only
					</p>

					<p className="mb-16">
						For testing, you may use the following sample links. The scraper
						should sufficiently scrape all data from the reports using the same
						project:
					</p>

					<ul className="list">
						<Link to="/table/table1">
							<li>1 product, 1 quarter</li>
						</Link>

						<Link to="/table/table2">
							<li>4 products, 2.5 years</li>
						</Link>

						<Link to="/table/table3">
							<li>10 products, 10 years</li>
						</Link>
					</ul>
				</div>
				<table className="table">
					<thead>
						<tr>
							<th rowspan="2">Quarter</th>
							<th colspan="2">Product 1</th>
							<th rowspan="2">Total Amount</th>
						</tr>

						<tr>
							<th>Item</th>
							<th>Amount</th>
						</tr>
					</thead>

					<tbody>
						<td class="center" colspan="8">
							2000
						</td>

						<tr>
							<td>Q1</td>
							<td>68</td>
							<td>$13,525.20</td>
							<td>$13,525.20</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2000</b>
							</td>
							<td colspan="3">
								<b>$13,525.20</b>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table1;
