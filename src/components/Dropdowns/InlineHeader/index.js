import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


const InlineHeader = ({ text, className = ''}) => {
  return (
    <span className={`dropdown-inline-header ${className}`}>
      {text}
    </span>
  )
};

InlineHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default InlineHeader;
