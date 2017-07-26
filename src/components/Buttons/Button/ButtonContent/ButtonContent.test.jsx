import React from 'react';
import renderer from 'react-test-renderer';
import ButtonContent from './ButtonContex.jsx';
import icon from '../../../../../assets/icons/svg/loading-circle-dashes-black.svg';

it('Should render without fails', () => {
  const customClassName = 'class-name-example';
  const text = 'Some text';
  const component = renderer.create(
    <ButtonContent className={customClassName} text={text} iconUri={icon} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
