import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


const RegularHeader = ({ text, className = ''}) => {
  return (
    <div className={`dropdown-regular-header ${className}`}>
      {text}
    </div>
  )
};

RegularHeader.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  remark: PropTypes.string,
};

export default RegularHeader;
