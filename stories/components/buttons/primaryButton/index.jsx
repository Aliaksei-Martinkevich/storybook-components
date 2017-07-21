import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import icon from '../../../../assets/icons/svg/loading-circle-dashes-white.svg';
import Button from '../../../../src/components/Buttons/Button/Button.jsx';

export default storiesOf('PrimaryButton', module)
  .add('with text', () => (<Button
    onClick={action('clicked')}
    text="Regular state"
    theme="primary"
  />))
  .add('with some emoji', () => (<Button
    onClick={action('clicked')}
    text="😀 😎 👍 💯"
    theme="primary"
  />))
  .add('with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long text"
    theme="primary"
  />))
  .add('disabled', () => (<Button
    onClick={action('clicked')}
    text="Disabled button"
    disabled
    theme="primary"
  />))
  .add('processing', () => (<Button
    onClick={action('clicked')}
    text="Processing"
    processing
    iconUri={icon}
    theme="primary"
  />))
  .add('processing with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long long long text"
    processing
    iconUri={icon}
    theme="primary"
  />))
;
