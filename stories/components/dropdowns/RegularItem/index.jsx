import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RegularItem from '../../../../src/components/Dropdowns/RegularItem/RegularItem.jsx';
import icon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';

export default storiesOf('Dropdown regular Item', module)
  .add('With text', () =>
    (<RegularItem
      onClick={action('Item clicked')}
      text="Some text"
    />))
  .add('With long text', () =>
    (<RegularItem
      onClick={action('Item clicked')}
      text="Some long long long long long long text"
    />))
  .add('With remark', () =>
    (<RegularItem
      onClick={action('Item clicked')}
      text="Some text"
      remark="Some remark"
    />))
  .add('With utf icon', () =>
    (<RegularItem
      onClick={action('Item clicked')}
      text="👁 Some text"
    />))
  .add('With icon', () =>
    (<RegularItem
      onClick={action('Item clicked')}
      text="Some text"
      iconUri={icon}
    />));
