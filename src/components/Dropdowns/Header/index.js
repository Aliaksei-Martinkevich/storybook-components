import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Header = ({className, children, onClick}) => {
  return (
    <div className={`dropdown-header ${className}`}
         onClick={onClick}>
      {children}
    </div>
  );
};

Header.defaultProps = {
  className: '',
}

Header.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Header;
