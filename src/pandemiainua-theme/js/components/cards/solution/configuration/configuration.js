import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './configuration.scss';

const Configuration = ({ className, approvedBy, materials, tools, ...props }) => {
  return (
    <Box className={cn(styles.configuration, className)} fullWidth direction="column">
      {approvedBy && (
        <Box className={styles.block} justify="between" align="center" fullWidth padding="s">
          <Text size="s" align="left">
            {i18n.t('solutions.approved')}
          </Text>
          <Text size="s" align="right">
            {approvedBy.map(el => el.name).join(', ')}
          </Text>
        </Box>
      )}
      {materials && (
        <Box className={styles.block} justify="between" align="center" fullWidth padding="s">
          <Text size="s" align="left">
            {i18n.t('solutions.materials')}
          </Text>
          <Text size="s" align="right">
            {materials.map(el => el.name).join(', ')}
          </Text>
        </Box>
      )}
      {tools && (
        <Box className={styles.block} justify="between" align="center" fullWidth padding="s">
          <Text size="s" align="left">
            {i18n.t('solutions.instruments')}
          </Text>
          <Text size="s" align="right">
            {tools.map(el => el.name).join(', ')}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export const configurationProps = {
  className: PropTypes.string,
  materials: PropTypes.array,
  tools: PropTypes.array,
  approvedBy: PropTypes.array
};

Configuration.defaultProps = {
  instruments: [],
  materials: [],
  approvedBy: []
};

Configuration.propTypes = configurationProps;

export default memo(Configuration);
