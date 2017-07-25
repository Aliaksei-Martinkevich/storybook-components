import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from '../../../../src/components/Dropdowns/Dropdown/Header/Header.jsx';
import Button, { BUTTON_THEMES } from '../../../../src/components/Buttons/Button/Button.jsx';

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
        theme={BUTTON_THEMES.PRIMARY}
      />
    </Header>));
