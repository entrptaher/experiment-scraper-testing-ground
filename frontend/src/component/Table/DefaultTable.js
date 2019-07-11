import React from 'react';

export default function DefaultTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th rowSpan="2">Quarter</th>
          <th colSpan="2">Product 1</th>
          <th colSpan="2">Product 2</th>
          <th colSpan="2">Product 3</th>
          <th rowSpan="2">Total Amount</th>
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
          <td className="center" colSpan="8">
            2000
          </td>
        </tr>

        <tr>
          <td>Q1</td>
          <td className="center pink" colSpan="2">
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
          <td colSpan="7">
            <b>$238,481.10</b>
          </td>
        </tr>

        <tr>
          <td className="bg" colSpan="8" />
        </tr>

        <tr>
          <td className="center" colSpan="8">
            2001
          </td>
        </tr>

        <tr>
          <td>Q1</td>
          <td>76</td>
          <td>$15,116.40</td>
          <td>77</td>
          <td>$15,315.30</td>
          <td className="color" rowSpan="4">
            <center>-</center>
          </td>
          <td className="color" rowSpan="4">
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
          <td colSpan="7">
            <b>$291,587.40</b>
          </td>
        </tr>
        <tr>
          <td className="bg" colSpan="8" />
        </tr>

        <tr>
          <td className="center" colSpan="8">
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
          <td className="center pink" colSpan="2">
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
          <td colSpan="7">
            <b>$124,113.600</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
