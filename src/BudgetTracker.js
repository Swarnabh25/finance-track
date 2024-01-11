// BudgetTracker.js
import React from 'react';
import styled from 'styled-components';

const BudgetTrackerContainer = styled.div`
  margin-top: 20px;
`;

const BudgetTracker = () => {
  // Fetch and display user's budget information from backend
  const budgetData = {}; // Fetch this data from your API

  return (
    <BudgetTrackerContainer>
      <h3>Budget Tracker</h3>
      <p>Total Budget: ${budgetData.totalBudget || 0}</p>
      <p>Remaining Budget: ${budgetData.remainingBudget || 0}</p>
    </BudgetTrackerContainer>
  );
};

export default BudgetTracker;
