import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import icon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';
import Button, { BUTTON_THEMES } from '../../../../src/components/Buttons/Button/Button.jsx';

export default storiesOf('Secondary Button', module)
  .add('with text', () => (<Button
    onClick={action('clicked')}
    text="Regular state"
    theme={BUTTON_THEMES.SECONDARY}
  />))
  .add('with some emoji', () => (<Button
    onClick={action('clicked')}
    text="😀 😎 👍 💯"
    theme={BUTTON_THEMES.SECONDARY}
  />))
  .add('with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long text"
    theme={BUTTON_THEMES.SECONDARY}
  />))
  .add('disabled', () => (<Button
    onClick={action('clicked')}
    text="Disabled button"
    disabled
    theme={BUTTON_THEMES.SECONDARY}
  />))
  .add('processing', () => (<Button
    onClick={action('clicked')}
    text="Processing"
    processing
    iconUri={icon}
    theme={BUTTON_THEMES.SECONDARY}
  />))
  .add('processing with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long long long text"
    processing
    iconUri={icon}
    theme={BUTTON_THEMES.SECONDARY}
  />))
;
