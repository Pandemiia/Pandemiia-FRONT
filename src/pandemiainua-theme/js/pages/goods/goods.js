import React, { memo } from 'react';
import { Layout } from '@pinua/common/components';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './goods.scss';

const Goods = ({ ...props }) => {
  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box>
          <Text size="l">{i18n.t('goods.title')}</Text>
        </Box>
        <Box></Box>
      </Box>
    </Layout>
  );
};

export default memo(Goods);
