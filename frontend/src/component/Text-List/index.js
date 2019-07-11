import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import TextList1 from './Text-List1';
import TextList2 from './Text-List2';
import TextList3 from './Text-List3';
import TextList4 from './Text-List4';
import TextList5 from './Text-List5';

export default function index({ location: { search } }) {
  const { ver } = queryString.parse(search);
  let textList;
  switch (ver) {
    case '1':
      textList = <TextList1 />;
      break;
    case '2':
      textList = <TextList2 />;
      break;
    case '3':
      textList = <TextList3 />;
      break;
    case '4':
      textList = <TextList4 />;
      break;
    case '5':
      textList = <TextList5 />;
      break;

    default:
      textList = <TextList1 />;
      break;
  }
  return (
    <div className="wrapper">
      <div className="text-list">
        <h1 className="title mb-16">TEXT LIST {ver && `(version ${ver})`}</h1>
        <p className="mb-16">
          Some web publishers do not trouble themselves by formatting their data
          using HTML elements and often simply put information on their web site
          as a plain text. What is even worse, they sometimes add supplementary
          notes in the same manner as the main information making it harder to
          separate them. But a good web scraper should overcome all these
          obstacles.
        </p>

        <p className="mb-16">
          In this test, the web scraper needs to scrape a list of US cities with
          their population organized as a simple text. Specifically, it has to:
        </p>

        <ol className="mb-16 list">
          <li>
            Extract all the cities and their population, while skipping all the
            notes
          </li>
          <li>Scrape cities with their notes (if any)</li>
          <li>Scrape bold cities (with their population) only</li>
        </ol>

        <p className="mb-16">
          There is a ver parameter (which varies from 1 to 5) to show different
          list versions (with different city numbers, bold cities and their
          notes).
        </p>

        <p className="mb-16">
          For testing, you may use the following sample links. The scraper
          should sufficiently scrape all data from any link using the same
          project:
        </p>

        <ul className="list mb-32">
          <Link to="/textlist?ver=2">
            <li>Text list 1</li>
          </Link>

          <Link to="/textlist?ver=2">
            <li>Text list 2</li>
          </Link>

          <Link to="/textlist?ver=3">
            <li>Text list 3</li>
          </Link>

          <Link to="/textlist?ver=4">
            <li>Text list 4</li>
          </Link>

          <Link to="/textlist?ver=5">
            <li>Text list 5</li>
          </Link>
        </ul>

        <div className="population">
          <h3 className="child uppercase">City</h3>
          <h3 className="child uppercase">Population</h3>
        </div>
        <hr className="hr" />
        {textList}
      </div>
    </div>
  );
}
