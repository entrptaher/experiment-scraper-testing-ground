import React from 'react';

export default function TextList3() {
  return (
    <div className="testListThree">
      <div className="population">
        <p className="child text-list">New York</p>
        <p className="child text-list space">8,244,910</p>
      </div>

      <div className="population">
        <p className="child text-list">Los Angeles</p>
        <p className="child space text-list">3,819,702</p>
      </div>

      <p>change: +0.71%</p>

      <div className="population">
        <h3 className="child">Chicago</h3>
        <h3 className="child sh3ace">2,707,120</h3>
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
    </div>
  );
}
