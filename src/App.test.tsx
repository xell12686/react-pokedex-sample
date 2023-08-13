import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the online pokedex heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /the online pokedex/i });
  expect(headingElement).toBeInTheDocument();
});
