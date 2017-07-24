import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RegularHeader.scss';


const RegularHeader = ({ text, className = '', expanded = false }) => (
  <div className={classNames('dropdown-regular-header', className, {
    expanded,
    collapsed: !expanded,
  })}
  >
    {text}
  </div>
  );

RegularHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  expanded: PropTypes.bool,
};

export default RegularHeader;
