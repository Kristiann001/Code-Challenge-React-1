import React from 'react';

function Table() {
  return (
    <div className="Table">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>2019-12-01</td>
                  <td>Paycheck from Bob's Burgers</td>
                  <td>Income</td>
                  <td>1000</td>
                </tr>

                <tr>
                  <td>2019-12-01</td>
                  <td>South by Southwest Quinoa Bowl at fresh and Co</td>
                  <td>Food</td>
                  <td>-10.55</td>
                </tr>

                <tr>
                  <td>2019-12-02</td>
                  <td>South by Southwest Quinoa Bowl at fresh and Co</td>
                  <td>Food</td>
                  <td>-10.55</td>
                </tr>

                <tr>
                  <td>2019-12-04</td>
                  <td>Sunglasses, Urban Outfitters</td>
                  <td>Fashion</td>
                  <td>-24.99</td>
                </tr>

                <tr>
                  <td>2019-12-06</td>
                  <td>Venmo,Alice Pays you for Burrito</td>
                  <td>Food</td>
                  <td>8.75</td>
                </tr>

                <tr>
                  <td>2019-12-06</td>
                  <td>Chipotle</td>
                  <td>Food</td>
                  <td>-17.59</td>
                </tr>
                
                <tr>
                  <td>2019-12-08</td>
                  <td>Movies</td>
                  <td>Entertainment</td>
                  <td>25</td>
                </tr>

              </tbody>
            </table>
          </div>
  );
}

export default Table;