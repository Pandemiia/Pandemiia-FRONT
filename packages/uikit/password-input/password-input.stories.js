import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';
import PasswordInput from './password-input';

storiesOf('Uikit/PasswordInput', module).add('PasswordInput', () => (
  <PasswordInput
    disabled={boolean('disabled', false)}
    intent={select('intent', {}, 'default')}
    placeholder={text('placeholder', 'Placeholder')}
    value={text('value', '')}
    onChange={action('onChange')}
    onBlur={action('onBlur')}
  />
));
