// utils.js

// Function to format a date string
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

// Function to truncate a string if it exceeds a specified length
export const truncateString = (str, maxLength) => {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
};
