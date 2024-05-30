// utils.test.js

import { formatDate, truncateString } from './utils';

// Test cases for formatDate function
test('formatDate formats date string correctly', () => {
  expect(formatDate('2024-05-30')).toBe('May 30, 2024');
  expect(formatDate('2024-12-25')).toBe('December 25, 2024');
});

// Test cases for truncateString function
test('truncateString truncates long strings correctly', () => {
  expect(truncateString('Lorem ipsum dolor sit amet', 10)).toBe('Lorem ipsu...');
  expect(truncateString('Hello, world!', 8)).toBe('Hello, w...');
  expect(truncateString('Short string', 20)).toBe('Short string');
});
