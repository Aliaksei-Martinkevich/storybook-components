import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';
import settings from './settings.scss';
import icon from '../../../../assets/icons/circle-loading-white.png';

const PrimaryButton = ({ text, onClick, className = '', disabled = false, processing = false }) => (
  <Button
    text={text}
    onClick={onClick}
    disabled={disabled}
    processing={processing}
    iconUri={icon}
    style={settings}
    className={classNames({
      'primary-button': true,
      [className]: true,
    },
    )}
  />
  );

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  className: PropTypes.string,
};

export default PrimaryButton;
