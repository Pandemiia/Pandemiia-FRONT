import React from 'react';
import { Layout } from '@pinua/common/components';
import { Text } from '@pinua/uikit';

import styles from './account.scss';

const Account = ({ ...props }) => {
  return (
    <Layout className={styles.page}>
      <Text>
        Сторінка <b>Особистого кабінету</b> знаходиться на стадіії розробки...
      </Text>
    </Layout>
  );
};

export default Account;
