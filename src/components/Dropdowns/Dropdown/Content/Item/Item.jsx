import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, children, id, className = '' }) => (
  <div className={className} onClick={() => onClick(id)}>
    {children}
  </div>
  );

Item.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default Item;
