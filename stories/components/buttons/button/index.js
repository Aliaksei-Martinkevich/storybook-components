import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../../../src/components/Buttons/Button'
import blackIcon from '../../../../public/circle-loading-black.png';

export default storiesOf('Button', module)
  .add('with text', () => <Button 
    onClick={action('clicked')} 
    text='Regular state'
    />)
  .add('with some emoji', () => <Button 
    onClick={action('clicked')} 
    text='😀 😎 👍 💯'
    />)
  .add('with long text', () => <Button
    onClick={action('clicked')}
    text='Some long long long long long long long long long text'
    />)
  .add('disabled', () => <Button 
    onClick={action('clicked')} 
    text='Disabled button'
    disabled={true}
    />)
  .add('processing', () => <Button
    onClick={action('clicked')}
    text='Processing'
    processing={true}
    iconUri={blackIcon}
    />)
  .add('processing with long text', () => <Button
    onClick={action('clicked')}
    text='Some long long long long long long long long long long long text'
    processing={true}
    iconUri={blackIcon}
/>);
