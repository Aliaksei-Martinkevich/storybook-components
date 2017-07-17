import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components';
const Dropdown = Components.Dropdowns.Dropdown;

export default storiesOf('Dropdown', module)
  .add('Text content', () => 
  <Dropdown header='Click me'>
    <div myid='one'>Element long long long long long long long long long long long long long long long long one</div>
    <div>Element two</div>
    <div>Element three</div>
    <div>Element four</div>
  </Dropdown>)
  ;