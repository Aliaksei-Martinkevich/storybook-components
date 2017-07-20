import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import defaultSettings from './settings.scss';

import ButtonContent from '../ButtonContent/ButtonContex.jsx';

const Button = ({
  text,
  onClick = undefined,
  disabled = false,
  processing = false,
  iconUri = undefined,
  style = undefined,
  className = '',
}) => {
  let settings = defaultSettings;
  if (style) {
    settings = style;
  }

  return (
    <button
      style={settings}
      className={`button ${processing ? 'processing ' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      title={text}
    >
      <ButtonContent iconUri={processing ? iconUri : undefined} text={text} />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  iconUri: PropTypes.any,
};

export default Button;
