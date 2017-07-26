import React from 'react';
import renderer from 'react-test-renderer';
import Remark from './Remark.jsx';

describe('Remark', () => {
  it('Should render without fails', () => {
    const customClassName = 'class-name-example';
    const text = 'Some text';
    const component = renderer.create(<Remark className={customClassName} text={text} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
