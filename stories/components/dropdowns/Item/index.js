import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Components from '../../../../src/components'

const Item = Components.Dropdowns.Item;

export default storiesOf('Dropdown Item', module)
  .add('With text', () =>
    <Item onClick={action('Item clicked')}>
      Some text
    </Item>);