// In MainScreen.js
import React, { useState } from 'react';
import styled from 'styled-components';
import TransactionHistory from './TransactionHistory';
import BudgetTracker from './BudgetTracker';

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
  const [netAssets, setNetAssets] = useState(0);

  // Callback function to update net assets
  const updateNetAssets = (amount) => {
    setNetAssets((prevNetAssets) => prevNetAssets + amount);
  };

  return (
    <MainContainer>
      <h2>Welcome to Finance Tracker!</h2>
      <MainContent>
        {/* Transaction History */}
        <TransactionHistory updateNetAssets={updateNetAssets} />

        {/* Budget Tracker */}
        <BudgetTracker netAssets={netAssets} />

        {/* ... (Other components) */}
      </MainContent>
    </MainContainer>
  );
};

export default MainScreen;
