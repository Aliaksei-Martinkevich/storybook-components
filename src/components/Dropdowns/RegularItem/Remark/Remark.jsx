import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Remark.scss';

const Remark = ({ text, className }) => (
  <span className={classNames('remark', className)}>
    {text}
  </span>);

Remark.defaultProps = {
  className: '',
};

Remark.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Remark;
