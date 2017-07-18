import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Components from '../../../../src/components';

const Dropdown = Components.Dropdowns.Dropdown;
const RegularItem = Components.Dropdowns.RegularItem;
const RegularHeader = Components.Dropdowns.RegularHeader;
const ButtonHeader = Components.Dropdowns.ButtonHeader;
const InlineHeader = Components.Dropdowns.InlineHeader;

export default storiesOf('Dropdown', module)
  .add('With regular items', () =>
    <Dropdown header='Plain text header'>
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some long long long long long long long long long text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='👁 Some text with utf icon' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)
  .add('With regular header', () =>
    <Dropdown header={<RegularHeader text='Regular header' />}>
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some long long long long long long long long long text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='👁 Some text with utf icon' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)
  .add('With button header', () =>
    <Dropdown header={<ButtonHeader text='Button header' />}>
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some long long long long long long long long long text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='👁 Some text with utf icon' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)
  .add('With inline header', () =>
    <Dropdown header={<InlineHeader text='Inline header' />}>
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some long long long long long long long long long text' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with remark'
        remark='Some long long long long long long long long long long long long two lines remark' />
      <RegularItem
        onClick={action('Item clicked')}
        text='👁 Some text with utf icon' />
      <RegularItem
        onClick={action('Item clicked')}
        text='Some text with icon'
        iconUri='https://material.io/guidelines/static/spec/images/callouts/default.svg' />
    </Dropdown>)