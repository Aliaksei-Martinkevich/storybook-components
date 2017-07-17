import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Content = ({className = '', children }) => {
  return (
    <div className={`dropdown-content ${className}`}>
      <div>
        { Array.isArray(children) 
        ? Array.prototype.map.call(children, el => <div>{el}</div>)
        : <div>{children}</div> }
      </div>
    </div>
  )
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
