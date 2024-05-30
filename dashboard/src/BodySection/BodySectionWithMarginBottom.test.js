import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  test('renders correctly with given title and children', () => {
    const { getByText } = render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test Children</p>
      </BodySectionWithMarginBottom>
    );

    // Check if the title is rendered
    expect(getByText('Test Title')).toBeInTheDocument();
    // Check if the children are rendered
    expect(getByText('Test Children')).toBeInTheDocument();
  });

  test('applies the correct margin class', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="Test Title">
        <p>Test Children</p>
      </BodySectionWithMarginBottom>
    );

    // Check if the div with the class 'bodySectionWithMarginBottom' is present
    expect(container.firstChild).toHaveClass('bodySectionWithMarginBottom');
  });
});
