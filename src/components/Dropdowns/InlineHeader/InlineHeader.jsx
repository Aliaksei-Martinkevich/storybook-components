import React from 'react';
import PropTypes from 'prop-types';

import './InlineHeader.scss';


const InlineHeader = ({ text, className = '' }) => (
  <span className={`dropdown-inline-header ${className}`}>
    {text}
  </span>
  );

InlineHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default InlineHeader;
