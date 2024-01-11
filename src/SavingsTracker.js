// SavingsTracker.js
import React from 'react';
import styled from 'styled-components';

const SavingsTrackerContainer = styled.div`
  margin-top: 20px;
`;

const SavingsTracker = () => {
  // Fetch and display user's savings information from backend
  const savingsData = {}; // Fetch this data from your API

  // Ensure savingsData.goals is an array before attempting to map
  const goals = savingsData.goals || [];

  return (
    <SavingsTrackerContainer>
      <h3>Savings Tracker</h3>
      <p>Total Savings: ${savingsData.totalSavings || 0}</p>
      <p>Goals:</p>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            {goal.description}: ${goal.amount}
          </li>
        ))}
      </ul>
    </SavingsTrackerContainer>
  );
};

export default SavingsTracker;
