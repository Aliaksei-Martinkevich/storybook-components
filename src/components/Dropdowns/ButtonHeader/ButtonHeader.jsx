import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonHeader.scss';

import Button from '../../Buttons/Button/Button.jsx';

const DropdownButton = ({ text, className, theme, expanded }) =>
  (<Button
    text={text}
    theme={theme}
    className={classNames('button_dropdown-header', className, {
      expanded,
      collapsed: !expanded,
    })}
  />);

DropdownButton.defaultProps = {
  expanded: false,
  className: '',
  theme: 'primary',
};

DropdownButton.propTypes = {
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.string,
};

export default DropdownButton;
