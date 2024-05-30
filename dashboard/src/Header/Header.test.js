import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders header with correct title', () => {
    render(<Header />);
    const headerElement = screen.getByText(/Welcome to Wanderlust Travel/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Header />);
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const contactLink = screen.getByText(/Contact/i);
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
