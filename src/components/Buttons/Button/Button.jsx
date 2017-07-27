import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button_theme-default.scss';
import './button_theme-primary.scss';
import './button_theme-secondary.scss';
import './button_theme-transparent.scss';
import './Button.scss';
import ButtonContent from './ButtonContent/ButtonContex.jsx';

export const BUTTON_THEMES = {
  DEFAULT: 'button_theme-default',
  PRIMARY: 'button_theme-primary',
  SECONDARY: 'button_theme-secondary',
  TRANSPARENT: 'button_theme-transparent',
};

const Button = ({ text, onClick, disabled, processing, iconUri, className, theme }) => (
  <button
    className={classNames('button', theme, { button_processing: processing }, className)}
    onClick={onClick}
    disabled={disabled || processing}
    title={text}
  >
    <ButtonContent iconUri={processing && iconUri} text={text} />
  </button>
  );

Button.defaultProps = {
  onClick: undefined,
  disabled: false,
  processing: false,
  iconUri: '',
  className: '',
  theme: BUTTON_THEMES.DEFAULT,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  iconUri: PropTypes.string,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object
      .getOwnPropertyNames(BUTTON_THEMES)
      .map(name => BUTTON_THEMES[name])),
};

export default Button;
