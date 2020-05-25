import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';
import Input from './input';

storiesOf('Uikit/Input', module).add('Input', () => (
  <Input
    type={select('type', {}, 'text')}
    disabled={boolean('disabled', false)}
    intent={select('intent', {}, 'default')}
    placeholder={text('placeholder', 'Placeholder')}
    value={text('value', '')}
    onChange={action('onChange')}
    onBlur={action('onBlur')}
  />
));
