import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';

describe('Content', () => {
  it('Should be collapsed', () => {
    const customClassName = 'class-name-example';
    const component = renderer.create(
      <Content
        className={customClassName}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should be expanded', () => {
    const customClassName = 'class-name-example';
    const component = renderer.create(
      <Content
        className={customClassName}
        expanded
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Children should be clickable', () => {
    const customClassName = 'class-name-example';
    const onItemClick = jest.fn();
    const component = renderer.create(
      <Content
        className={customClassName}
        onItemClick={onItemClick}
      >
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Content>);
    let tree = component.toJSON();
    tree.children.forEach(elem => elem.props.onClick());
    tree = component.toJSON();
    expect(onItemClick.mock.calls).toEqual([['0'], ['1'], ['2']]);
    expect(tree).toMatchSnapshot();
  });
});
