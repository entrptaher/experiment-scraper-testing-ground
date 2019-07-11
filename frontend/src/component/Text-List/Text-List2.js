import React from 'react';

export default function TextList2() {
  return (
    <div className="testListTwo">
      <div className="population">
        <h3 className="child">New York</h3>
        <h3 className="child space">8,244,910</h3>
      </div>

      <p>(City of New York)</p>

      <div className="population">
        <p className="child text-list">Los Angeles</p>
        <p className="child space text-list">3,819,702</p>
      </div>

      <p>change: +0.71%</p>

      <div className="population">
        <p className="child text-list">Chicago</p>
        <p className="child space text-list">2,707,120</p>
      </div>

      <div className="population">
        <h3 className="child">Houston</h3>
        <h3 className="child space">2,145,146</h3>
      </div>

      <p>(2,099,451 in 2010)</p>
    </div>
  );
}
