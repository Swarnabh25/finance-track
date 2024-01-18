// In BudgetTracker.js
import React, { useState } from 'react';
import styled from 'styled-components';

const BudgetTrackerContainer = styled.div`
  margin-top: 20px;
`;

const BudgetTracker = () => {
  // State for managing user input
  const [assets, setAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);

  // Function to update assets and liabilities
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'assets') {
      setAssets(parseFloat(value) || 0);
    } else if (name === 'liabilities') {
      setLiabilities(parseFloat(value) || 0);
    }
  };

  // Calculate net assets
  const netAssets = assets - liabilities;

  return (
    <BudgetTrackerContainer>
      <h3>Budget Tracker</h3>
      {/* Input fields for assets and liabilities */}
      <label htmlFor="assets">Assets: $</label>
      <input type="number" id="assets" name="assets" value={assets} onChange={handleInputChange} />

      <label htmlFor="liabilities">Liabilities: $</label>
      <input type="number" id="liabilities" name="liabilities" value={liabilities} onChange={handleInputChange} />

      {/* Display net assets */}
      <p>Net Assets: ${netAssets}</p>
    </BudgetTrackerContainer>
  );
};

export default BudgetTracker;
