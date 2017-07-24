import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Item from '../../../../src/components/Dropdowns/Dropdown/Content/Item/Item.jsx';

export default storiesOf('Dropdown Item', module)
  .add('With text', () =>
    (<Item onClick={action('Item clicked')}>
      Some text
    </Item>));
