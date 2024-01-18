// In TransactionHistory.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TransactionHistoryContainer = styled.div`
  margin-top: 20px;
`;

const TransactionHistory = ({ updateNetAssets }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionNote, setTransactionNote] = useState('');
  const [transactionType, setTransactionType] = useState('credit');

  const togglePopup = () => setShowPopup(!showPopup);

  const addTransaction = () => {
    const newTransaction = {
      type: transactionType,
      amount: transactionAmount,
      description: transactionDescription,
      note: transactionNote,
    };

    // Update net assets based on the transaction type
    if (transactionType === 'credit') {
      updateNetAssets(transactionAmount); // Update net assets by adding the credit amount
    } else {
      updateNetAssets(-transactionAmount); // Update net assets by subtracting the debit amount
    }

    // Update the transaction history
    setTransactions([...transactions, newTransaction]);

    // Reset input fields
    setTransactionAmount(0);
    setTransactionDescription('');
    setTransactionNote('');

    // Close the pop-up after adding the transaction
    togglePopup();
  };

  return (
    <TransactionHistoryContainer>
      <h3>Transaction History</h3>
      <button onClick={togglePopup}>Add Transaction</button>

      {/* Pop-up for adding a transaction */}
      {showPopup && (
        <div>
          <label htmlFor="transactionType">Transaction Type: </label>
          <select
            id="transactionType"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>

          <label htmlFor="transactionAmount">Amount: $</label>
          <input
            type="number"
            id="transactionAmount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(parseFloat(e.target.value) || 0)}
          />

          <label htmlFor="transactionDescription">Description: </label>
          <input
            type="text"
            id="transactionDescription"
            value={transactionDescription}
            onChange={(e) => setTransactionDescription(e.target.value)}
          />

          <label htmlFor="transactionNote">Note: </label>
          <input
            type="text"
            id="transactionNote"
            value={transactionNote}
            onChange={(e) => setTransactionNote(e.target.value)}
          />

          <button onClick={addTransaction}>Add</button>
        </div>
      )}

      {/* Display the list of transactions */}
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === 'credit' ? 'Credit' : 'Debit'}: ${transaction.amount} - {transaction.description} (Note: {transaction.note})
          </li>
        ))}
      </ul>
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
