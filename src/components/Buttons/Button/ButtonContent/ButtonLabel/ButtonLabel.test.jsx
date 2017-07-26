import React from 'react';
import renderer from 'react-test-renderer';
import ButtonLabel from './ButtonLabel.jsx';

it('Should render without fails', () => {
  const customClassName = 'class-name-example';
  const text = 'Some text';
  const component = renderer.create(<ButtonLabel className={customClassName} text={text} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
