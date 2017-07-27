import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RegularHeader.scss';


const RegularHeader = ({ text, className, expanded }) => (
  <div className={classNames('dropdown-regular-header', className, {
    'dropdown-regular-header_expanded': expanded,
    'dropdown-regular-header_collapsed': !expanded,
  })}
  >
    {text}
  </div>
  );

RegularHeader.defaultProps = {
  className: '',
  expanded: false,
};

RegularHeader.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool,
};

export default RegularHeader;
