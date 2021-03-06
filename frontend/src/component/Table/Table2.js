import React from 'react';

export default function Table2() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th rowSpan="2">Quarter</th>
          <th colSpan="2">Product 1</th>
          <th colSpan="2">Product 2</th>
          <th colSpan="2">Product 3</th>
          <th colSpan="2">Product 4</th>
          <th rowSpan="2">Total Amount</th>
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
          <td className="center" colSpan="10">
            2000
          </td>
        </tr>

        <tr>
          <td>Q1</td>
          <td className="center pink" colSpan="2">
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
          <td colSpan="9">
            <b>$396,009.90</b>
          </td>
        </tr>

        <tr>
          <td className="bg" colSpan="10" />
        </tr>

        <tr>
          <td className="center" colSpan="10">
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
          <td colSpan="9">
            <b>$467,613.90</b>
          </td>
        </tr>

        <tr>
          <td className="bg" colSpan="10" />
        </tr>

        <tr>
          <td className="center" colSpan="10">
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
          <td colSpan="9">
            <b>$178,015.50</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
