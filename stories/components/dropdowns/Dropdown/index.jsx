import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown from '../../../../src/components/Dropdowns/Dropdown/Dropdown.jsx';
import RegularItem from '../../../../src/components/Dropdowns/RegularItem/RegularItem.jsx';
import RegularHeader from '../../../../src/components/Dropdowns/RegularHeader/RegularHeader.jsx';
import ButtonHeader from '../../../../src/components/Dropdowns/ButtonHeader/ButtonHeader.jsx';
import InlineHeader from '../../../../src/components/Dropdowns/InlineHeader/InlineHeader.jsx';
import icon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';

export default storiesOf('Dropdown', module)
  .add('With regular items', () =>
    (<Dropdown onItemClick={action('Item clicked')} header={<span>Plain text header</span>}>
      <RegularItem
        key="Item 1"
        text="Some text"
      />
      <RegularItem
        key="Item 2"
        text="Some long long long long long long long long long text"
      />
      <RegularItem
        key="Item 3"
        text="Some text with remark"
        remark="Some remark"
      />
      <RegularItem
        key="Item 4"
        text="Some text with remark"
        remark="Some long long long long long long long long long long long long two lines remark"
      />
      <RegularItem
        key="Item 5"
        text="👁 Some text with utf icon"
      />
      <RegularItem
        key="Item 6"
        text="Some text with icon"
        iconUri={icon}
      />
    </Dropdown>))
  .add('With regular header', () =>
    (<Dropdown
      onItemClick={action('Item clicked')}
      header={<RegularHeader text="Regular header" />}
    >
      <RegularItem
        text="Some text"
      />
      <RegularItem
        text="Some long long long long long long long long long text"
      />
      <RegularItem
        text="Some text with remark"
        remark="Some remark"
      />
      <RegularItem
        text="Some text with remark"
        remark="Some long long long long long long long long long long long long two lines remark"
      />
      <RegularItem
        text="👁 Some text with utf icon"
      />
      <RegularItem
        text="Some text with icon"
        iconUri={icon}
      />
    </Dropdown>))
  .add('With button header', () =>
    (<Dropdown
      onItemClick={action('Item clicked')}
      header={<ButtonHeader text="Button header" />}
    >
      <RegularItem
        text="Some text"
      />
      <RegularItem
        text="Some long long long long long long long long long text"
      />
      <RegularItem
        text="Some text with remark"
        remark="Some remark"
      />
      <RegularItem
        text="Some text with remark"
        remark="Some long long long long long long long long long long long long two lines remark"
      />
      <RegularItem
        text="👁 Some text with utf icon"
      />
      <RegularItem
        text="Some text with icon"
        iconUri={icon}
      />
    </Dropdown>))
  .add('With inline header', () =>
    (<Dropdown
      onItemClick={action('Item clicked')}
      header={<InlineHeader text="Inline header" />}
    >
      <RegularItem
        text="Some text"
      />
      <RegularItem
        text="Some long long long long long long long long long text"
      />
      <RegularItem
        text="Some text with remark"
        remark="Some remark"
      />
      <RegularItem
        text="Some text with remark"
        remark="Some long long long long long long long long long long long long two lines remark"
      />
      <RegularItem
        text="👁 Some text with utf icon"
      />
      <RegularItem
        text="Some text with icon"
        iconUri={icon}
      />
    </Dropdown>));
