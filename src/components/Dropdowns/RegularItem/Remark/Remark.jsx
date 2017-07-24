import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Remark.scss';

const Remark = ({ text, className }) => (
  <span className={classNames('remark', className)}>
    {text}
  </span>);

Remark.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Remark;
