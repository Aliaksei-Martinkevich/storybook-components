import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ButtonHeader.scss';
import Button, { BUTTON_THEMES } from '../../Buttons/Button/Button.jsx';

export const BUTTON_HEADER_THEMES = BUTTON_THEMES;

const DropdownButton = ({ text, className, theme, expanded }) =>
  (<Button
    text={text}
    theme={theme}
    className={classNames('button_dropdown-header', className, {
      'button_dropdown-header_expanded': expanded,
      'button_dropdown-header_collapsed': !expanded,
    })}
  />);

DropdownButton.defaultProps = {
  expanded: false,
  className: '',
  theme: BUTTON_THEMES.PRIMARY,
};

DropdownButton.propTypes = {
  text: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.oneOf(Object
      .getOwnPropertyNames(BUTTON_HEADER_THEMES)
      .map(name => BUTTON_HEADER_THEMES[name])),
};

export default DropdownButton;
