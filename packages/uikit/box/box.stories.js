import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';

import Box, { justifies, aligns, directions, columns } from './box';

import boxStyles from './box.scss';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '350px'
};

storiesOf('Uikit/Box', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .add('default', () => {
    return (
      <div style={styles}>
        <Box
          className={boxStyles.storybookWrapper}
          direction={select('direction', directions, 'row')}
          justify={select('justify', justifies, 'center')}
          align={select('align', aligns, 'center')}
          width={select('width', columns, 'xl')}
        >
          <div className={boxStyles.storybookItem}>1</div>
          <div className={boxStyles.storybookItem}>2</div>
          <div className={boxStyles.storybookItem}>3</div>
          <div className={boxStyles.storybookItem}>4</div>
          <div className={boxStyles.storybookItem}>5</div>
        </Box>
      </div>
    );
  });
