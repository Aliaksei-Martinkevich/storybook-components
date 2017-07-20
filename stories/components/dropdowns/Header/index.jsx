import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../../../../src/components/Dropdowns/Header/Header.jsx';
import PrimaryButton from '../../../../src/components/Buttons/PrimaryButton/PrimaryButton.jsx';

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
      <PrimaryButton
        onClick={action('Button clicked')}
        text="Click me!"
      />
    </Header>));
