import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonLabel.scss';


const ButtonLabel = ({ text, className }) => (
  <span className={classNames('button-label', className)}>
    {text}
  </span>
);

ButtonLabel.defaultProps = {
  className: '',
};

ButtonLabel.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ButtonLabel;
