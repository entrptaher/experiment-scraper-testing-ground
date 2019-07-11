import React from 'react';

export default function Table1() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th rowSpan="2">Quarter</th>
          <th colSpan="2">Product 1</th>
          <th rowSpan="2">Total Amount</th>
        </tr>

        <tr>
          <th>Item</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="center" colSpan="8">
            2000
          </td>
        </tr>

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
          <td colSpan="3">
            <b>$13,525.20</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
