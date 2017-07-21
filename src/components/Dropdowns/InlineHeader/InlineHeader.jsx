import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InlineHeader.scss';


const InlineHeader = ({ text, className = '' }) => (
  <span className={classNames({
    'dropdown-inline-header': true,
    [className]: true,
  })}
  >
    {text}
  </span>
  );

InlineHeader.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default InlineHeader;
