import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Components from '../../../../../src/components'
const Content = Components.Dropdowns.DropdownContents.Content;

export default storiesOf('Dropdown content', module)
  .add('Collapsed', () =>
    <Content isExpanded={false}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Content>)
  .add('Expanded', () =>
    <Content isExpanded={true}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Content>);