import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('Should be collapsed and collapse it\'s children', () => {
    const customClassName = 'class-name-example';
    const component = renderer.create(
      <Header
        className={customClassName}
      >
        <div />
      </Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should be expanded and expand it\'s children', () => {
    const customClassName = 'class-name-example';
    const component = renderer.create(
      <Header
        className={customClassName}
        expanded
      >
        <div />
      </Header>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
