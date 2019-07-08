import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Table2 extends Component {
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
							<th colspan="2">Product 2</th>
							<th colspan="2">Product 3</th>
							<th colspan="2">Product 4</th>
							<th rowspan="2">Total Amount</th>
						</tr>

						<tr>
							<th>Item</th>
							<th>Amount</th>
							<th>Item</th>
							<th>Amount</th>
							<th>Item</th>
							<th>Amount</th>
							<th>Item</th>
							<th>Amount</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="center" colspan="10">
								2000
							</td>
						</tr>

						<tr>
							<td>Q1</td>
							<td className="center pink" colspan="2">
								-
							</td>
							<td>30</td>
							<td>$5,967.00</td>
							<td>36</td>
							<td>$7,160.40</td>
							<td>41</td>
							<td>$8,154.90</td>
							<td>$21,282.30</td>
						</tr>

						<tr>
							<td>Q2</td>
							<td>42</td>
							<td>$8,353.80</td>
							<td>47</td>
							<td>$9,348.30</td>
							<td>52</td>
							<td>$10,342.80</td>
							<td>56</td>
							<td>$11,138.40</td>
							<td>$39,183.30</td>
						</tr>

						<tr>
							<td>Q3</td>
							<td>57</td>
							<td>$11,337.30</td>
							<td>61</td>
							<td>$12,132.90</td>
							<td>65</td>
							<td>$12,928.50</td>
							<td>68</td>
							<td>$13,525.20</td>
							<td>$49,923.90</td>
						</tr>

						<tr>
							<td>Q4</td>
							<td>69</td>
							<td>$13,724.10</td>
							<td>71</td>
							<td>$14,121.9</td>
							<td>73</td>
							<td>$14,519.70</td>
							<td>75</td>
							<td>$14,917.50</td>
							<td>$57,283.20</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2000</b>
							</td>
							<td colspan="9">
								<b>$396,009.90</b>
							</td>
						</tr>

						<tr>
							<td className="bg" colspan="10"></td>
						</tr>

						<tr>
							<td className="center" colspan="10">
								2001
							</td>
						</tr>
						<tr>
							<td>Q1</td>
							<td>76</td>
							<td>$15,116.40</td>
							<td>77</td>
							<td>$15,315.30</td>
							<td className="color" rowspan="4">
								<center>-</center>
							</td>
							<td className="color" rowspan="4">
								<center>-</center>
							</td>
							<td>78</td>
							<td>$15,514.20</td>
							<td>$45,945.90</td>
						</tr>

						<tr>
							<td>Q2</td>
							<td>78</td>
							<td>$15,514.20</td>
							<td>78</td>
							<td>$15,514.20</td>
							<td>76</td>
							<td>$15,116.40</td>
							<td>$46,144.80</td>
						</tr>

						<tr>
							<td>Q3</td>
							<td>75</td>
							<td>$14,917.50</td>
							<td>74</td>
							<td>$14,718.60</td>
							<td>69</td>
							<td>$13,724.10</td>
							<td>$43,360.20</td>
						</tr>

						<tr>
							<td>Q4</td>
							<td>68</td>
							<td>$13,525.20</td>
							<td>65</td>
							<td>$12,928.50</td>
							<td>58</td>
							<td>$11,536.20</td>
							<td>$37,989.90</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2001</b>
							</td>
							<td colspan="9">
								<b>$467,613.90</b>
							</td>
						</tr>

						<tr>
							<td className="bg" colspan="10"></td>
						</tr>

						<tr>
							<td className="center" colspan="10">
								2002
							</td>
						</tr>

						<tr>
							<td>Q1</td>
							<td>57</td>
							<td>$11,337.30</td>
							<td>53</td>
							<td>$10,541.70</td>
							<td>48</td>
							<td>$9,547.20</td>
							<td>43</td>
							<td>$8,552.70</td>
							<td>$39,978.90</td>
						</tr>

						<tr>
							<td>Q2</td>
							<td>42</td>
							<td>$8,353.80</td>
							<td>37</td>
							<td>$7,359.30</td>
							<td>32</td>
							<td>$6,364.80</td>
							<td>26</td>
							<td>$5,171.40</td>
							<td>$27,249.30</td>
						</tr>

						<tr>
							<td>
								<b>Total for 2002</b>
							</td>
							<td colspan="9">
								<b>$178,015.50</b>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default Table2;
