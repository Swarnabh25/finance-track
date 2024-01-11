// ExpenseSummary.js
import React from 'react';
import styled from 'styled-components';

const ExpenseSummaryContainer = styled.div`
  margin-top: 20px;
`;

const ExpenseSummary = () => {
  // Fetch and display user's expense summary from backend
  const expenseData = {}; // Fetch this data from your API

  return (
    <ExpenseSummaryContainer>
      <h3>Expense Summary</h3>
      <p>Total Expenses: ${expenseData.totalExpenses || 0}</p>
      <p>Categories:</p>
      <ul>
        {Object.entries(expenseData.categories || {}).map(([category, amount]) => (
          <li key={category}>
            {category}: ${amount}
          </li>
        ))}
      </ul>
    </ExpenseSummaryContainer>
  );
};

export default ExpenseSummary;
