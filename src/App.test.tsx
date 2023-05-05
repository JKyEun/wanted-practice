import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h2 = screen.getByRole('heading');
  expect(h2).toBeInTheDocument();
  expect(h2.textContent).toBe('Hello, World');
});
