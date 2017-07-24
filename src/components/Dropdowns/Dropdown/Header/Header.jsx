import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Header.scss';

const Header = ({ className, children, onClick, expanded = false }) => (
  <div
    className={classNames({
      'dropdown-header': true,
      [className]: true,
    })}
    onClick={onClick}
  >
    {React.Children.map(children, child => React.cloneElement(child, { expanded }))}
  </div>
  );

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
  expanded: PropTypes.bool,
};

export default Header;
