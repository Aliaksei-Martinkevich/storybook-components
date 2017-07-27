import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Content.scss';
import Item from './Item/Item.jsx';

const Content = ({ className, onItemClick, children, expanded }) => (
  <div className={classNames('dropdown-content', className, {
    'dropdown-content_expanded': expanded,
    'dropdown-content_collapsed': !expanded })}
  >
    {
        React.Children.map(children,
          (el, id) => (
            <Item
              className="dropdown-content__item"
              onClick={onItemClick}
              key={el.key || id.toString()}
              id={el.key || id.toString()}
            >
              {el}
            </Item>))
    }
  </div>
  );

Content.defaultProps = {
  className: '',
  onItemClick: undefined,
  expanded: false,
};

Content.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  expanded: PropTypes.bool,
};

export default Content;
