import React from 'react';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = ({ children }) => {
  return (
    <div className="bodySectionWithMarginBottom">
      {children}
    </div>
  );
};

BodySectionWithMarginBottom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BodySectionWithMarginBottom;
