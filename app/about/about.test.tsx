import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';

describe('About Page', () => {
  it('renders a heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});