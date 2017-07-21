import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Header.scss';

const Header = ({ className, children, onClick }) => (
  <div
    className={classNames({
      'dropdown-header': true,
      [className]: true,
    })}
    onClick={onClick}
  >
    {children}
  </div>
  );

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default Header;
