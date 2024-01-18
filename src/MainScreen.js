// In MainScreen.js
import React from 'react';
import styled from 'styled-components';
import TransactionHistory from './TransactionHistory';
import ExpenseSummary from './ExpenseSummary';
import BudgetTracker from './BudgetTracker';
import SavingsTracker from './SavingsTracker';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MainContent = styled.div`
  max-width: 800px;
  width: 100%;
  margin-top: 20px;
`;

const MainScreen = () => {
  return (
    <MainContainer>
      <h2>Welcome to Finance Tracker!</h2>
      <MainContent>
        {/* Transaction History */}
        <TransactionHistory />

        {/* Expense Summary */}
        <ExpenseSummary />

        {/* Budget Tracker */}
        <BudgetTracker />

        {/* Savings Tracker */}
        <SavingsTracker />

        {/* Add more components as needed */}
      </MainContent>
    </MainContainer>
  );
};

export default MainScreen;
