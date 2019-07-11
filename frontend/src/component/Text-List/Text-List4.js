import React from 'react';

export default function TextList4() {
  return (
    <div className="testListFour">
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
        <p className="child text-list">Chicago</p>
        <p className="child space text-list">2,707,120</p>
      </div>

      <div className="population">
        <h3 className="child">Houston</h3>
        <h3 className="child space">2,145,146</h3>
      </div>

      <div className="population">
        <p className="child text-list">Philadelphia</p>
        <p className="child space text-list">1,536,471</p>
      </div>
      <p>(City of Philadelphia)</p>
      <div className="population">
        <h3 className="child">Phoenix</h3>
        <h3 className="child space">1,469,471</h3>
      </div>

      <div className="population">
        <p className="child text-list">San Antonio</p>
        <p className="child space text-list">1,359,758</p>
      </div>
      <p>change: +2.44%</p>

      <div className="population">
        <p className="child text-list">San Diego</p>
        <p className="child space text-list">1,326,179</p>
      </div>

      <div className="population mb-48">
        <p className=" child text-list">California</p>
      </div>
    </div>
  );
}
