// MainScreen.js
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MainScreen = () => {
  return (
    <MainContainer>
      <h2>Welcome to Finance Tracker!</h2>
      <h2>Welcome to Finance Tracker!</h2>
      {/* Add components for displaying user data, expenses, etc. */}
    </MainContainer>
  );
};

export default MainScreen;
