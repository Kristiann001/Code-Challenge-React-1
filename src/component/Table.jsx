import React, { useState } from 'react';

function Table() {
  const [searchTerm, setSearchTerm] = useState('');
  const data = [
    { date: '2019-12-01', description: "Paycheck from Bob's Burgers", category: 'Income', amount: 1000 },
    { date: '2019-12-01', description: 'South by Southwest Quinoa Bowl at fresh and Co', category: 'Food', amount: -10.55 },
    { date: '2019-12-02', description: 'South by Southwest Quinoa Bowl at fresh and Co', category: 'Food', amount: -10.55 },
    { date: '2019-12-04', description: 'Sunglasses, Urban Outfitters', category: 'Fashion', amount: -24.99 },
    { date: '2019-12-06', description: 'Venmo,Alice Pays you for Burrito', category: 'Food', amount: 8.75 },
    { date: '2019-12-06', description: 'Chipotle', category: 'Food', amount: -17.59 },
    { date: '2019-12-08', description: 'Movies', category: 'Entertainment', amount: 25 }
  ];

  const filteredData = data.filter(item =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search your Recent Transaction"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
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
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;