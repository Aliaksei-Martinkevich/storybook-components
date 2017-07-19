import React from 'react';
import ReactDOM from 'react-dom';

import Components from './components';
const PrimaryButton = Components.Buttons.PrimaryButton;

// ReactDOM.render(React.createElement('div', null, `Hello`), document.getElementById('root'));
ReactDOM.render(<PrimaryButton text='Press me!' onClick={console.log}/>, document.getElementById('root'));