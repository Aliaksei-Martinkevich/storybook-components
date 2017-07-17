import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const RegularItem = ({ onClick, text, className = '' }) => {
  return (
    <div onClick={onClick} className={`dropdown-regular-item ${className}`}>
      {text}
    </div>
  )
};

RegularItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default RegularItem;
