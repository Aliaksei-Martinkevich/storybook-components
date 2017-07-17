import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import defaultSettings from './settings.css';

import ButtonContent from '../ButtonContent';

const Button = ({
  text,
  onClick,
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
      <button style={settings}
              className={`button ${processing ? 'processing ' : ''} ${className}`}
              onClick={onClick}
              disabled={disabled}
              title={text}>
        
        <ButtonContent iconUri={processing ? iconUri : undefined} text={text}/>
       
      </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
}

export default Button;
