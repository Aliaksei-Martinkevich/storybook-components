import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Components from '../../../../../src/components'
const Header = Components.Dropdowns.DropdownHeaders.Header;
const DefaultHeader = Components.Dropdowns.DropdownHeaders.DefaultHeader;
const PrimaryButton = Components.Buttons.PrimaryButton;

export default storiesOf('Dropdown Header', module)
  .add('With text', () => 
    <Header
      onClick={action('Outer click')}>
      <span>Some text</span>
    </Header>)
  .add('With children', () => 
    <Header>
      <DefaultHeader
        text='Some long long long long long long text'
        onClick={action('Inner click')}
      />
    </Header>)
  .add('With button', () => 
    <Header>
      <PrimaryButton 
        onClick={action('clicked')} 
        text='😀 😎 👍 💯'
      />
    </Header>);