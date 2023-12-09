import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('title check', () => {
  render(<App />);
  const title = screen.getByText("都道府県別人口推移");
  expect(title).toBeInTheDocument();
});
