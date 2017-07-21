import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button_theme-default.scss';
import './button_theme-primary.scss';
import './button_theme-secondary.scss';
import './button_theme-transparent.scss';
import './Button.scss';
import ButtonContent from './ButtonContent/ButtonContex.jsx';

const Button = ({
  text,
  onClick = undefined,
  disabled = false,
  processing = false,
  iconUri = undefined,
  className = '',
  theme = 'default',
}) => (
  <button
    className={classNames('button', `button_theme-${theme}`, { button_processing: processing }, className)}
    onClick={onClick}
    disabled={disabled}
    title={text}
  >
    <ButtonContent iconUri={processing ? iconUri : undefined} text={text} />
  </button>
  );

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  iconUri: PropTypes.any,
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default Button;
