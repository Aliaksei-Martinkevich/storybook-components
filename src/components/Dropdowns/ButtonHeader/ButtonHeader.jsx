import React from 'react';
import PropTypes from 'prop-types';
import './ButtonHeader.scss';

import Button from '../../Buttons/Button/Button.jsx';

const DropdownButton = ({ text = '' }) =>
  (<Button
    text={text}
    theme="primary"
    className="dropdown-button-header"
  />);

DropdownButton.propTypes = {
  text: PropTypes.string,
};

export default DropdownButton;
