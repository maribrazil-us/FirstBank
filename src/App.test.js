import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to First Bank of React/i);
  expect(linkElement).toBeInTheDocument();
});
