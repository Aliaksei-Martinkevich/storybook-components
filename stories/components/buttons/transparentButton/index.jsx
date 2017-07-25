import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import icon from '../../../../assets/icons/svg/loading-circle-dashes-white.svg';
import Button, { BUTTON_THEMES } from '../../../../src/components/Buttons/Button/Button.jsx';

import './background.scss';

export default storiesOf('Transparent Button', module)
  .add('with text', () =>
    (<div className="background"><Button
      onClick={action('clicked')}
      text="Regular state"
      theme={BUTTON_THEMES.TRANSPARENT}
    /></div>))
  .add('with some emoji', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="😀 😎 👍 💯"
    theme={BUTTON_THEMES.TRANSPARENT}
  /></div>))
  .add('with long text', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long text"
    theme={BUTTON_THEMES.TRANSPARENT}
  /></div>))
  .add('disabled', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Disabled button"
    disabled
    theme={BUTTON_THEMES.TRANSPARENT}
  /></div>))
  .add('processing', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Processing"
    processing
    iconUri={icon}
    theme={BUTTON_THEMES.TRANSPARENT}
  /></div>))
  .add('processing with long text', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long long long text"
    processing
    iconUri={icon}
    theme={BUTTON_THEMES.TRANSPARENT}
  /></div>));
