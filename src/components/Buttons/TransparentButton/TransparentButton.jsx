import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button.jsx';
import settings from './settings.scss';
import icon from '../../../../assets/icons/circle-loading-white.png';

const TransparentButton = ({ text, onClick, className = '', disabled = false, processing = false }) => (
  <Button
    text={text}
    Click={onClick}
    sabled={disabled}
    ocessing={processing}
    onUri={icon}
    yle={settings}
    assName={`transparent-button ${className}`}
  />
  );

TransparentButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  className: PropTypes.string,
};

export default TransparentButton;
