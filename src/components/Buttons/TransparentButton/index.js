import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import settings from './settings.css';
import icon from '../../../../public/circle-loading-white.png';

const TransparentButton = ({text, onClick, className='', disabled = false, processing = false}) => {
  
  return (
    <Button text={text}
            onClick={onClick}
            disabled={disabled}
            processing={processing}
            iconUri={icon}
            style={settings}
            className={`transparent-button ${className}`}
            />
  );
};

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
}

export default TransparentButton;
