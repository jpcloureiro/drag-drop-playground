import React from 'react'
import { render, screen } from '@testing-library/react';
import OldApp from './OldApp';

test('renders learn react link', () => {
  render(<OldApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
