import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Components from '../../../../src/components'
const Header = Components.Dropdowns.Header;
const PrimaryButton = Components.Buttons.PrimaryButton;

export default storiesOf('Dropdown Header', module)
  .add('With text', () => 
    <Header
      onClick={action('Header clicked')}>
      <span>Some text</span>
    </Header>)
  .add('With children', () => 
    <Header onClick={action('Header clicked')}>
      <div>
        Some long long long long long long text
      </div>
    </Header>)
  .add('With button', () => 
    <Header onClick={action('Header clicked')}>
      <PrimaryButton 
        onClick={action('Button clicked')} 
        text='Click me!'
      />
    </Header>);