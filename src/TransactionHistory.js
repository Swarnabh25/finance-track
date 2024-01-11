// TransactionHistory.js
import React from 'react';
import styled from 'styled-components';

const TransactionHistoryContainer = styled.div`
  margin-top: 20px;
`;

const TransactionHistory = () => {
  // Fetch and display user's transaction history from backend
  const transactionData = []; // Fetch this data from your API

  return (
    <TransactionHistoryContainer>
      <h3>Transaction History</h3>
      <ul>
        {transactionData.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </TransactionHistoryContainer>
  );
};

export default TransactionHistory;
