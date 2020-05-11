import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';

import styles from './needs.scss';

const Needs = ({ name, needed, received, colored, className, ...props }) => {
  return (
    <Box
      className={cn(styles.item, className, {
        [styles.colored]: !!colored
      })}
      component="li"
      fullWidth
      padding="s m"
    >
      <Box className={styles.left}>
        <Text size="s">{name}</Text>
      </Box>
      <Box className={styles.right}>
        <Text color="info" size="s">
          {needed}
        </Text>
        <Text color="info" size="s" left="xs" right="xs">
          /
        </Text>
        <Text className={styles.received} color="navigational" size="s">
          {received}
        </Text>
      </Box>
    </Box>
  );
};

export const needsPropTypes = {
  name: PropTypes.string,
  needed: PropTypes.number,
  colored: PropTypes.bool,
  className: PropTypes.string,
  received: PropTypes.number
};

Needs.propTypes = needsPropTypes;

export default memo(Needs);
