import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, children}) => {
  return (
    <div onClick={onClick}>
      {children}
    </div>
  )
};

Item.propTypes = {
  onClick: PropTypes.func,
};

export default Item;
