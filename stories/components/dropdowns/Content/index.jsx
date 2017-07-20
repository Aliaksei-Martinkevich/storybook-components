import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Content from '../../../../src/components/Dropdowns/Content/Content.jsx';

export default storiesOf('Dropdown content', module)
  .add('Expanded', () =>
    (<Content
      isExpanded
      onItemClick={action('Menu item click')}
    >
      <div itemId="one">Item 1</div>
      <div itemId="two">Item 2</div>
      <div itemId="three">Item 3</div>
    </Content>))
  .add('Long text', () =>
    (<Content
      isExpanded
      onItemClick={action('Menu item click')}
    >
      <div itemId="one">Item 1</div>
      <div itemId="two">Item 2 with long text. This text is realy huge</div>
      <div itemId="three">Item 3 with long text. This text is even bigger then item's two</div>
    </Content>))
  .add('Remark Items', () =>
    (<Content
      isExpanded
      onItemClick={action('Menu item click')}
    >
      <div itemId="one">Item 1</div>
      <div itemId="two">Item 2</div>
      <div itemId="three">Item 3</div>
    </Content>));
