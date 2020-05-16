import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import Text, { colors, sizes } from './text';

import TextReadme from './README.md';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '350px',
  backgroundColor: '#eee'
};

storiesOf('Uikit/Text', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add(
    'default',
    () => (
      <div style={styles}>
        <Text
          top={select('marginTop', sizes, 's')}
          right={select('marginRight', sizes, 's')}
          bottom={select('marginBottom', sizes, 's')}
          left={select('marginLeft', sizes, 's')}
          color={select('color', colors, 'primary')}
          size={select('sizes', sizes, 'm')}
        >
          {text('text', 'Default text')}
        </Text>
      </div>
    ),
    {
      readme: {
        sidebar: TextReadme,
        codeTheme: 'github'
      }
    }
  );
