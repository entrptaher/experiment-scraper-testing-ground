import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/style.css';
import '../css/table-report.css';

class TableReport extends Component {
	state = {};
	render() {
		return (
			<div className="wrapper">
				<h1 className="title mb-16">table report</h1>

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
						cells in the report contain a hyphen only.
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

				<table class="table">
					<thead>
						<tr>
							<th rowspan="2">Quarter</th>
							<th colspan="2">Product 1</th>
							<th colspan="2">Product 2</th>
							<th colspan="2">Product 3</th>
							<th rowspan="2">Total Amount</th>
						</tr>

						<tr>
							<th>Items</th>
							<th>Amount</th>

							<th>Items</th>
							<th>Amount</th>

							<th>Items</th>
							<th>Amount</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td class="center" colspan="8">
								2000
							</td>
						</tr>

						<tr>
							<td>Q1</td>
							<td class="center pink" colspan="2">
								-
							</td>
							<td>34</td>
							<td>$6,762.60</td>
							<td>41</td>
							<td>$8,154.90</td>
							<td>$14,917.50</td>
						</tr>

						<tr>
							<td>Q2</td>
							<td>44</td>
							<td>$8,751.60</td>
							<td>50</td>
							<td>$9,945.00</td>
							<td>56</td>
							<td>$11,138.40</td>
							<td>$29,835.00</td>
						</tr>

						<tr>
							<td>Q3</td>
							<td>59</td>
							<td>$11,735.10</td>
							<td>63</td>
							<td>$12,530.70</td>
							<td>68</td>
							<td>$13,525.20</td>
							<td>$37,791.00</td>
						</tr>

						<tr>
							<td>Q4</td>
							<td>70</td>
							<td>$13,923.00</td>
							<td>73</td>
							<td>$14,519.70</td>
							<td>75</td>
							<td>$14,917.50</td>
							<td>$43,360.20</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2000</b>
							</td>
							<td colspan="7">
								<b>$238,481.10</b>
							</td>
						</tr>

						<tr>
							<td class="bg" colspan="8"></td>
						</tr>

						<tr>
							<td class="center" colspan="8">
								2001
							</td>
						</tr>

						<tr>
							<td>Q1</td>
							<td>76</td>
							<td>$15,116.40</td>
							<td>77</td>
							<td>$15,315.30</td>
							<td class="color" rowspan="4">
								<center>-</center>
							</td>
							<td class="color" rowspan="4">
								<center>-</center>
							</td>
							<td>$30,431.70</td>
						</tr>

						<tr>
							<td>Q2</td>
							<td>78</td>
							<td>$15,514.20</td>
							<td>77</td>
							<td>$15,315.30</td>
							<td>$30,829.50</td>
						</tr>

						<tr>
							<td>Q3</td>
							<td>75</td>
							<td>$14,917.50</td>
							<td>72</td>
							<td>$14,320.80</td>
							<td>$29,238.30</td>
						</tr>

						<tr>
							<td>Q4</td>
							<td>67</td>
							<td>$13,326.30</td>
							<td>63</td>
							<td>$12,530.70</td>
							<td>$25,857.00</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2001</b>
							</td>
							<td colspan="7">
								<b>$291,587.40</b>
							</td>
						</tr>
						<tr>
							<td class="bg" colspan="8"></td>
						</tr>

						<tr>
							<td class="center" colspan="8">
								2002
							</td>
						</tr>

						<tr>
							<td>Q1</td>
							<td>55</td>
							<td>$10,939.50</td>
							<td>50</td>
							<td>$9,945.00</td>
							<td>43</td>
							<td>$8,552.70</td>
							<td>$29,437.20</td>
						</tr>

						<tr>
							<td>Q2</td>
							<td>40</td>
							<td>$7,956.00</td>
							<td>33</td>
							<td>$6,563.70</td>
							<td>26</td>
							<td>$5,171.40</td>
							<td>$19,691.10</td>
						</tr>

						<tr>
							<td>Q3</td>
							<td>22</td>
							<td>$4,375.80</td>
							<td class="center pink" colspan="2">
								-
							</td>
							<td>7</td>
							<td>$1,392.30</td>
							<td>$5,768.10</td>
						</tr>

						<tr>
							<td>Q4</td>
							<td>3</td>
							<td>$596.70</td>
							<td>5</td>
							<td>$994.50</td>
							<td>12</td>
							<td>$2,386.80</td>
							<td>$3,978.00</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2002</b>
							</td>
							<td colspan="7">
								<b>$124,113.600</b>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default TableReport;
