import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item.jsx';

describe('Item', () => {
  it('Should render without fails', () => {
    const customClassName = 'class-name-example';
    const component = renderer.create(
      <Item
        className={customClassName}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should send it\'s id into onClick callback', () => {
    const customClassName = 'class-name-example';
    const id = 'sampleId';
    const onClick = jest.fn();
    const component = renderer.create(
      <Item
        id={id}
        onClick={onClick}
        className={customClassName}
      />);
    let tree = component.toJSON();
    tree.props.onClick();
    tree = component.toJSON();
    expect(onClick.mock.calls).toEqual([[id]]);
    expect(tree).toMatchSnapshot();
  });
});
