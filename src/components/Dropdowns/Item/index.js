import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, itemId, children }) => {
  return (
    <div onClick={() => onClick(itemId)}>
      {children}
    </div>
  )
};

Item.propTypes = {
  onClick: PropTypes.func,
  itemId: PropTypes.any,
};

export default Item;
