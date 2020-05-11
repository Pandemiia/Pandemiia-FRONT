import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';

import Button, { colors, sizes } from './button';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '350px'
};

storiesOf('Uikit/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add('default', () => (
    <div style={styles}>
      <Button
        top={select('marginTop', sizes, 's')}
        right={select('marginRight', sizes, 's')}
        bottom={select('marginBottom', sizes, 's')}
        left={select('marginLeft', sizes, 's')}
        color={select('color', colors, 'primary')}
        size={select('sizes', sizes, 'm')}
        circle={boolean('circle', false)}
        rounded={boolean('rounded', false)}
        onClick={() => action('onClick')('clicked')}
      >
        Button
      </Button>
    </div>
  ));
