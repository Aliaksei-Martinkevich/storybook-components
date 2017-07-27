import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InlineHeader.scss';


const InlineHeader = ({ text, className, expanded }) => (
  <span className={classNames('text_dropdown-header', className, {
    'text_dropdown-header_expanded': expanded,
    'text_dropdown-header_collapsed': !expanded,
  })}
  >
    {text}
  </span>
  );

InlineHeader.defaultProps = {
  className: '',
  expanded: false,
};

InlineHeader.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool,
};

export default InlineHeader;
