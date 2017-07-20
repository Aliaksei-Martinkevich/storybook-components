import React from 'react';
import PropTypes from 'prop-types';

import './RegularHeader.scss';


const RegularHeader = ({ text, className = '' }) => (
  <div className={`dropdown-regular-header ${className}`}>
    {text}
  </div>
  );

RegularHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default RegularHeader;
