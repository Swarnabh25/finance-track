// MainScreen.js
import React, { useState } from 'react';
import styled from 'styled-components';
import TransactionHistory from './TransactionHistory';
import BudgetTracker from './BudgetTracker';
import './styles.css'; // Import the styles

const MainContainer = styled.div`
  /* Add any specific styles if needed */
`;

const MainContent = styled.div`
  /* Add any specific styles if needed */
`;

const MainScreen = () => {
  const [netAssets, setNetAssets] = useState(0);

  // Callback function to update net assets
  const updateNetAssets = (amount) => {
    setNetAssets((prevNetAssets) => prevNetAssets + amount);
  };

  return (
    <MainContainer className="container dark-theme">
      <h2>Welcome to Finance Tracker!</h2>
      <MainContent className="content fade-in">
        {/* Transaction History */}
        <TransactionHistory updateNetAssets={updateNetAssets} />

        {/* Budget Tracker */}
        <BudgetTracker netAssets={netAssets} />        
      </MainContent>
    </MainContainer>
  );
};

export default MainScreen;
