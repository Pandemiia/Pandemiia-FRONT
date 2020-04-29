import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';

import styles from './filter.scss';

const Filter = ({ onSelect, className, title, children, ...props }) => {
  return (
    <Box className={cn(styles.filter, className)} direction="column">
      <Box fullWidth>
        <Text size="m" align="left">
          {title}
        </Text>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

Filter.propTypes = {
  onSelect: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string
};

export default memo(Filter);
