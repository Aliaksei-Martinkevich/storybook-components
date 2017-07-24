import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonHeader.scss';

import Button from '../../Buttons/Button/Button.jsx';

const DropdownButton = ({ text = '', className = '', theme = 'primary', expanded }) =>
  (<Button
    text={text}
    theme={theme}
    className={classNames('button_dropdown-header', className, {
      expanded,
      collapsed: !expanded,
    })}
  />);

DropdownButton.propTypes = {
  text: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default DropdownButton;
