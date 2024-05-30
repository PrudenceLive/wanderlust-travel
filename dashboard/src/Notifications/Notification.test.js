import React from 'react';
import { render } from '@testing-library/react';
import Notification from './Notification';

describe('Notification', () => {
  test('renders with message and type', () => {
    const { getByText, container } = render(
      <Notification message="Test message" type="info" />
    );
    const notification = getByText('Test message');
    expect(notification).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('notification');
    expect(container.firstChild).toHaveClass('info');
  });

  test('renders different types', () => {
    const { container: container1 } = render(
      <Notification message="Success message" type="success" />
    );
    expect(container1.firstChild).toHaveClass('success');

    const { container: container2 } = render(
      <Notification message="Warning message" type="warning" />
    );
    expect(container2.firstChild).toHaveClass('warning');

    const { container: container3 } = render(
      <Notification message="Error message" type="error" />
    );
    expect(container3.firstChild).toHaveClass('error');
  });
});
