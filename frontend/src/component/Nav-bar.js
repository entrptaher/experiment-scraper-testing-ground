import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <div className="top">
          <h1 className="title">web scrapper testing ground</h1>
          <div className="img" />
        </div>
      </Link>
    </div>
  );
}
