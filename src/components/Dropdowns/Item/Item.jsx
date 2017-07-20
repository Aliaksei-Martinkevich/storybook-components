import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, children, id }) => (
  <div onClick={() => onClick(id)}>
    {children}
  </div>
  );

Item.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default Item;
