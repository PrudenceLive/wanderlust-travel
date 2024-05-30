import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders navbar component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders header component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders welcome text component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const welcomeTextElement = screen.getByText(/The Official Picturesque Travel Site/i);
  expect(welcomeTextElement).toBeInTheDocument();
});

test('renders slides component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const slidesElement = screen.getByText(/Tropical Islands/i);
  expect(slidesElement).toBeInTheDocument();
});

test('renders book now component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const bookNowElement = screen.getByText(/Book Now/i);
  expect(bookNowElement).toBeInTheDocument();
});

test('renders gallery component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const galleryElement = screen.getByText(/Gallery/i);
  expect(galleryElement).toBeInTheDocument();
});

test('renders water slider component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const waterSliderElement = screen.getByText(/Start Planning Your Dream Holiday/i);
  expect(waterSliderElement).toBeInTheDocument();
});

test('renders blog component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const blogElement = screen.getByText(/News And Events/i);
  expect(blogElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const footerElement = screen.getByText(/Copyright/i);
  expect(footerElement).toBeInTheDocument();
});
