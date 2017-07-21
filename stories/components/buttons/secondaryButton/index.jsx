import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import icon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';
import Button from '../../../../src/components/Buttons/Button/Button.jsx';

export default storiesOf('Secondary Button', module)
  .add('with text', () => (<Button
    onClick={action('clicked')}
    text="Regular state"
    theme="secondary"
  />))
  .add('with some emoji', () => (<Button
    onClick={action('clicked')}
    text="😀 😎 👍 💯"
    theme="secondary"
  />))
  .add('with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long text"
    theme="secondary"
  />))
  .add('disabled', () => (<Button
    onClick={action('clicked')}
    text="Disabled button"
    disabled
    theme="secondary"
  />))
  .add('processing', () => (<Button
    onClick={action('clicked')}
    text="Processing"
    processing
    iconUri={icon}
    theme="secondary"
  />))
  .add('processing with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long long long text"
    processing
    iconUri={icon}
    theme="secondary"
  />))
;
