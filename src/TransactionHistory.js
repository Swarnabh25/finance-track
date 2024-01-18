// In TransactionHistory.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TransactionHistoryContainer = styled.div`
  margin-top: 20px;
`;

const TransactionHistory = () => {
  // State for managing transaction input pop-up
  const [showPopup, setShowPopup] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionDescription, setTransactionDescription] = useState('');

  // Function to handle opening/closing the pop-up
  const togglePopup = () => setShowPopup(!showPopup);

  // Function to handle adding a transaction
  const addTransaction = () => {
    // Implement logic to add the transaction to the backend or state
    // For now, just log the details
    console.log(`Added Transaction: ${transactionAmount} - ${transactionDescription}`);
    // Close the pop-up after adding the transaction
    togglePopup();
  };

  return (
    <TransactionHistoryContainer>
      <h3>Transaction History</h3>
      {/* Button to open the transaction input pop-up */}
      <button onClick={togglePopup}>Add Transaction</button>

      {/* Pop-up for adding a transaction */}
      {showPopup && (
        <div>
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

          <button onClick={addTransaction}>Add</button>
        </div>
      )}

      {/* Display the list of transactions */}
      {/* ... (Your existing code for displaying transactions) */}
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
