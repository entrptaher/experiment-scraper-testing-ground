import React from 'react';

export default function TextList1() {
  return (
    <div className="testListOne">
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
  );
}
