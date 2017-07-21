import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../../../../src/components/Dropdowns/Header/Header.jsx';
import Button from '../../../../src/components/Buttons/Button/Button.jsx';

export default storiesOf('Dropdown Header', module)
  .add('With text', () =>
    (<Header
      onClick={action('Header clicked')}
    >
      <span>Some text</span>
    </Header>))
  .add('With children', () =>
    (<Header onClick={action('Header clicked')}>
      <div>
        Some long long long long long long text
      </div>
    </Header>))
  .add('With button', () =>
    (<Header onClick={action('Header clicked')}>
      <Button
        onClick={action('Button clicked')}
        text="Click me!"
        theme="primary"
      />
    </Header>));
