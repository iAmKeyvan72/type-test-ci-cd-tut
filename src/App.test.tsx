import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('tests the App root component', () => {
  it('should render the awesome test', () => {
    render(<App />);
    expect(screen.getByText(/hey/)).toBeInTheDocument();
  });
});
