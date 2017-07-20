import React from 'react';
import PropTypes from 'prop-types';
import './Content.scss';

import Item from '../Item/Item.jsx';

const Content = ({ className = '', onItemClick, children }) => {
  const onItemClickHandler = (key) => {
    onItemClick(key);
  };

  return (
    <div className={`dropdown-content ${className}`}>
      {Array.isArray(children)
        ? Array.prototype.map.call(children, (el, id) =>
          (<Item
            onClick={onItemClickHandler.bind(this, el.key || id.toString())}
            key={el.key || id}
          >
            {el}
          </Item>))
        : <Item
          onClick={onItemClickHandler.bind(this, children.key || '0')}
          key={children.key || '0'}
        >
          {children}
        </Item>}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func,
};

export default Content;
