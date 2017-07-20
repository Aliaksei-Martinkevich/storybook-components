import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';


const RegularHeader = ({ text, className = ''}) => {
  return (
    <div className={`dropdown-regular-header ${className}`}>
      {text}
    </div>
  )
};

RegularHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default RegularHeader;
