import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySection from './BodySection';
import WelcomeText from './WelcomeText';
import Slides from './Slides';
import BookNow from './BookNow';
import Gallery from './Gallery';
import WaterSlider from './WaterSlider';
import Blog from './Blog';

jest.mock('./WelcomeText');
jest.mock('./Slides');
jest.mock('./BookNow');
jest.mock('./Gallery');
jest.mock('./WaterSlider');
jest.mock('./Blog');

describe('BodySection Component', () => {
  beforeEach(() => {
    WelcomeText.mockImplementation(() => <div>Welcome Text Component</div>);
    Slides.mockImplementation(() => <div>Slides Component</div>);
    BookNow.mockImplementation(() => <div>Book Now Component</div>);
    Gallery.mockImplementation(() => <div>Gallery Component</div>);
    WaterSlider.mockImplementation(() => <div>Water Slider Component</div>);
    Blog.mockImplementation(() => <div>Blog Component</div>);
  });

  it('renders WelcomeText component', () => {
    render(<BodySection />);
    expect(screen.getByText('Welcome Text Component')).toBeInTheDocument();
  });

  it('renders Slides component', () => {
    render(<BodySection />);
    expect(screen.getByText('Slides Component')).toBeInTheDocument();
  });

  it('renders BookNow component', () => {
    render(<BodySection />);
    expect(screen.getByText('Book Now Component')).toBeInTheDocument();
  });

  it('renders Gallery component', () => {
    render(<BodySection />);
    expect(screen.getByText('Gallery Component')).toBeInTheDocument();
  });

  it('renders WaterSlider component', () => {
    render(<BodySection />);
    expect(screen.getByText('Water Slider Component')).toBeInTheDocument();
  });

  it('renders Blog component', () => {
    render(<BodySection />);
    expect(screen.getByText('Blog Component')).toBeInTheDocument();
  });
});
