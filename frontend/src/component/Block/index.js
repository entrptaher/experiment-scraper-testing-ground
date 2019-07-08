import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Block extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper block">
        <h1 className="title mb-16">BLOCKS: Price List</h1>
        <p className="mb-16">
          In this test, the web scraper needs to scrape a price list organized
          in a block layout. Specifically, it has to:
        </p>
        <ol className="list mb-16">
          <li>
            Extract all the products (their names, descriptions and prices),
            while skipping advertisements
          </li>
          <li>Scrape discounted products only</li>
          <li>Scrape products with red prices only</li>
        </ol>
        <p className="mb-16">
          There is a <b>ver</b> parameter (which varies from 1 to 5) to show
          different table versions (with different product numbers, best price
          and advertisement positions).
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
          For testing, you may use the following sample links. The scraper
          should sufficiently scrape all data from a certain case using the same
          project:
        </p>

        <ul className="list mb-16">
          <Link to="/block/block1">
            <li>Price List 1</li>
          </Link>

          <Link to="/block/block2">
            <li>Price List 2</li>
          </Link>

          <Link to="/block/block3">
            <li>Price List 3</li>
          </Link>

          <Link to="/block/block4">
            <li>Price List 4</li>
          </Link>

          <Link to="/block/block5">
            <li>Price List 5</li>
          </Link>
        </ul>
        <div className="cases">
          <div className="case-1">
            <h3 className="mt-32">CASE 1</h3>
            <table>
              <thead>
                <tr className="gray">
                  <th colspan="21">
                    Dell Latitude D610-1.73 Laptop Wireless Computer
                  </th>
                  <th colspan="1">$239.95</th>
                </tr>

                <tr className="gray">
                  <th colspan="21">
                    2 GHz Intel Pentium M, 1 GB DDR2 SDRAM, 40 GB, Microsoft
                    Windows XP Professiona
                  </th>
                </tr>

                <tr className="white">
                  <th colspan="20">Samsung Chromebook (Wi-Fi, 11.6-Inch)</th>
                  <th className="best" rowspan="2">
                    Best Price!
                  </th>
                  <th className="best">$249.00</th>
                </tr>

                <tr>
                  <th>1.7 GHz, 2 GB DDR3 SDRAM, 16 GB, Chrome</th>
                </tr>

                <tr>
                  <th className="center bg" colspan="22">
                    ADVERTISEMENT
                  </th>
                </tr>

                <tr className="gray">
                  <th colspan="21">
                    Apple MacBook Pro MD101LL/A 13.3-Inch Laptop (NEWEST
                    VERSION)
                  </th>
                  <th colspan="1">$1,099.99</th>
                </tr>

                <tr className="gray">
                  <th colspan="21">
                    2.5 GHz Intel Core i5, 4 GB DDR3 SDRAM, 500 GB Serial ATA,
                    Mac OS X v10.7 Lion
                  </th>
                </tr>

                <tr className="white">
                  <th colspan="20">
                    Acer Aspire AS5750Z-4835 15.6-Inch Laptop (Black)
                  </th>
                  <th className="best" rowspan="2">
                    Best Price!
                  </th>
                  <th className="best">$385.72</th>
                </tr>

                <tr>
                  <th>
                    2 GHz Pentium B940, 4 GB SDRAM, 500 GB, Windows 7 Home
                    Premium 64-bit
                  </th>
                </tr>

                <tr>
                  <th className="center bg" colspan="22">
                    ADVERTISEMENT
                  </th>
                </tr>

                <tr>
                  <th colspan="21">
                    HP Pavilion g7-2010nr 17.3-Inch Laptop (Black)
                  </th>
                  <th>$549.99</th>
                </tr>

                <tr>
                  <th colspan="21">
                    2.3 GHz Core i3-2350M, 6 GB SDRAM, 640 GB, Windows 7 Home
                    Premium 64-bit
                  </th>

                  <th className="discount">discount 7%</th>
                </tr>

                <tr>
                  <th colspan="21">ASUS A53Z-AS61 15.6-Inch Laptop (Mocha)</th>
                  <th>$399.99</th>
                </tr>

                <tr>
                  <th colspan="21" />
                </tr>
              </thead>
            </table>
            <h3 className="mt-32">CASE 2</h3>
            <table>
              <thead>
                <tr className="gray">
                  <th colspan="21">
                    Dell Latitude D610-1.73 Laptop Wireless Computer
                  </th>
                  <th colspan="1">$239.95</th>
                </tr>

                <tr className="gray">
                  <th colspan="21">
                    2 GHz Intel Pentium M, 1 GB DDR2 SDRAM, 40 GB, Microsoft
                    Windows XP Professiona
                  </th>
                </tr>

                <tr className="white">
                  <th colspan="20">Samsung Chromebook (Wi-Fi, 11.6-Inch)</th>
                  <th className="best" rowspan="2">
                    Best Price!
                  </th>
                  <th className="best">$249.00</th>
                </tr>

                <tr>
                  <th>1.7 GHz, 2 GB DDR3 SDRAM, 16 GB, Chrome</th>
                </tr>

                <tr>
                  <th className="center bg" colspan="22">
                    ADVERTISEMENT
                  </th>
                </tr>

                <tr className="gray">
                  <th colspan="21">
                    Apple MacBook Pro MD101LL/A 13.3-Inch Laptop (NEWEST
                    VERSION)
                  </th>
                  <th colspan="1">$1,099.99</th>
                </tr>

                <tr className="gray">
                  <th colspan="21">
                    2.5 GHz Intel Core i5, 4 GB DDR3 SDRAM, 500 GB Serial ATA,
                    Mac OS X v10.7 Lion
                  </th>
                </tr>

                <tr className="white">
                  <th colspan="20">
                    Acer Aspire AS5750Z-4835 15.6-Inch Laptop (Black)
                  </th>
                  <th className="best" rowspan="2">
                    Best Price!
                  </th>
                  <th className="best">$385.72</th>
                </tr>

                <tr>
                  <th>
                    2 GHz Pentium B940, 4 GB SDRAM, 500 GB, Windows 7 Home
                    Premium 64-bit
                  </th>
                </tr>

                <tr>
                  <th className="center bg" colspan="22">
                    ADVERTISEMENT
                  </th>
                </tr>

                <tr>
                  <th colspan="21">
                    HP Pavilion g7-2010nr 17.3-Inch Laptop (Black)
                  </th>
                  <th>$549.99</th>
                </tr>

                <tr>
                  <th colspan="21">
                    2.3 GHz Core i3-2350M, 6 GB SDRAM, 640 GB, Windows 7 Home
                    Premium 64-bit
                  </th>

                  <th className="discount">discount 7%</th>
                </tr>

                <tr>
                  <th colspan="21">ASUS A53Z-AS61 15.6-Inch Laptop (Mocha)</th>
                  <th>$399.99</th>
                </tr>

                <tr>
                  <th colspan="21" />
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
