import React from 'react';
import { Layout } from '@pinua/common/components';
import { Text } from '@pinua/uikit';

import styles from './contacts.scss';

const Contacts = () => {
  return (
    <Layout className={styles.page}>
      <Text>
        Сторінка <b>Контакти</b> знаходиться на стадіії розробки...
      </Text>
    </Layout>
  );
};

export default Contacts;
