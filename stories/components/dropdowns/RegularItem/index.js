import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Components from '../../../../src/components'

const RegularItem = Components.Dropdowns.RegularItem;

export default storiesOf('Dropdown regular Item', module)
  .add('With text', () =>
    <RegularItem
      onClick={action('Item clicked')}
      text='Some text' />)
  .add('With long text', () =>
    <RegularItem
      onClick={action('Item clicked')}
      text='Some long long long long long long text' />);