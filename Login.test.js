import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';

test('renders Login page header and sign in button', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );

  const welcomeText = screen.getByText(/Welcome Back/i);
  expect(welcomeText).toBeInTheDocument();

  const signInBtn = screen.getByRole('button', { name: /Sign In/i });
  expect(signInBtn).toBeInTheDocument();
});
