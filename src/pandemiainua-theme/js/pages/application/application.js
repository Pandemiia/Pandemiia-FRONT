import React from 'react';
import { Layout } from '@pinua/common/components';
import { Text } from '@pinua/uikit';

import styles from './application.scss';

const Application = ({ ...props }) => {
  return (
    <Layout className={styles.page}>
      <Text>
        Сторінка <b>Подачі заяви</b> знаходиться на стадіії розробки...
      </Text>
    </Layout>
  );
};

export default Application;
