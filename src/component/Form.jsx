import React, { useState } from 'react';

function Form({ addTransaction }) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = { date, description, category, amount };
    addTransaction(transaction);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <div className="FormOne">
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <div className="Date">
            <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
          </div>
          <div className="Description">
            <input type="text" name="Description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="Category">
            <input type="text" name="Category" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
          </div>
          <div className="Amount">
            <input type="number" name="Amount" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
        </form>
      </div>
      <div className="button">
            <button type="submit">Add Transaction</button>
          </div>
    </div>
  );
}

export default Form;