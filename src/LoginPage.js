import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ErrorMsg = styled.p`
  color: red;
`;

const TogglePasswordVisibility = styled.span`
  cursor: pointer;
  color: #3498db;
  margin-left: 5px;
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      // Add your login logic here, e.g., Firebase authentication
      // For demonstration purposes, consider using a delay to simulate asynchronous operation
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to the main screen after successful login
      navigate('/main');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <div>
          <input type={passwordVisible ? 'text' : 'password'} required />
          <TogglePasswordVisibility onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? 'Hide' : 'Show'}
          </TogglePasswordVisibility>
        </div>
        <LoginButton onClick={handleLogin} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </LoginButton>
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
