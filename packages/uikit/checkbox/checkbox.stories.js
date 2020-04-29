import React from 'react';
import { withState } from 'recompose';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';

const ControlledCheckboxGroup = withState(
  'value',
  'onChange',
  []
)(({ value, onChange }) => (
  <CheckboxGroup
    name="main"
    disabled={boolean('disabled', false)}
    inline={boolean('inline', true)}
    value={value}
    options={[
      { value: 'some', label: 'Some' },
      { value: 'default', label: 'Default' },
      { value: 'value', label: 'Value' }
    ]}
    onChange={e => {
      action('Change')(e);
      onChange(e.target.value);
    }}
  />
));

const ControlledCheckbox = withState(
  'value',
  'onChange',
  false
)(({ value, onChange }) => (
  <Checkbox
    name="region"
    label="Region"
    rounded={boolean('rounded', false)}
    disabled={boolean('disabled', false)}
    value={value}
    onChange={e => {
      action('Change')(e);
      onChange(!value);
    }}
  />
));

storiesOf('Uikit/Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <div style={{ width: 300 }}>
      <ControlledCheckbox />
    </div>
  ))
  .add('group', () => (
    <div style={{ width: 300 }}>
      <ControlledCheckboxGroup />
    </div>
  ));
