import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import settings from './settings.scss';
import icon from '../../../../public/circle-loading-white.png';

const PrimaryButton = ({text, onClick, className = '', disabled = false, processing = false}) => {
  
  return (
    <Button text={text}
            onClick={onClick}
            disabled={disabled}
            processing={processing}
            iconUri={icon}
            style={settings}
            className={`primary-button ${className}`}
            />
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  className: PropTypes.string,
}

export default PrimaryButton;
