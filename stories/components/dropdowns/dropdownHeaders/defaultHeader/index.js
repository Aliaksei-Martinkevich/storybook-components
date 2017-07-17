import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Components from '../../../../../src/components'
const DefaultHeader = Components.Dropdowns.DropdownHeaders.DefaultHeader;

export default storiesOf('Default Dropdown Header', module)
  .add('Some text', () => <DefaultHeader 
    text='Some text'
    onClick={action('click')}
/>)
  .add('Long text', () => <DefaultHeader
    text='Some long long long long long long long long text'
    onClick={action('click')}
/>);