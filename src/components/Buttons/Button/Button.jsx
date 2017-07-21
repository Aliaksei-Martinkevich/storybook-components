import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      className={classNames({
        button: true,
        processing,
        [className]: className !== '',
      })}
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
  style: PropTypes.style,
  className: PropTypes.string,
};

export default Button;
