import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ onClick, children, id, className }) => (
  <div className={className} onClick={() => onClick(id)}>
    {children}
  </div>
  );

Item.defaultProps = {
  onClick: undefined,
  className: '',
};

Item.propTypes = {
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Item;
