import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button_theme-default.scss';
import './button_theme-primary.scss';
import './button_theme-secondary.scss';
import './button_theme-transparent.scss';
import './Button.scss';
import ButtonContent from './ButtonContent/ButtonContex.jsx';

const Button = ({ text, onClick, disabled, processing, iconUri, className, theme }) => (
  <button
    className={classNames('button', `button_theme-${theme}`, { button_processing: processing }, className)}
    onClick={onClick}
    disabled={disabled}
    title={text}
  >
    <ButtonContent iconUri={processing ? iconUri : undefined} text={text} />
  </button>
  );

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  processing: false,
  iconUri: '',
  className: '',
  theme: 'default',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  iconUri: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'primary', 'secondary', 'transparent']),
};

export default Button;
