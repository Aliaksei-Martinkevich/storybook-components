import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Item from '../Item';

const Content = ({className = '', onItemClick, children }) => {
  const onItemClickHandler = (itemId) => {
    onItemClick(itemId);
  };

  return (
    <div className={`dropdown-content ${className}`}>
        { Array.isArray(children) 
        ? Array.prototype.map.call(children, (el, id) => 
          <Item onClick={onItemClickHandler} itemId={el.props.itemId || id}>{el}</Item>)
        : <Item onClick={onItemClickHandler} itemId={children.props.itemId || 0}>{children}</Item> }
    </div>
  )
};

Content.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func, 
};

export default Content;
