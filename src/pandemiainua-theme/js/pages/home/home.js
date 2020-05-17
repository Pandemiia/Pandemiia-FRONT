import React from 'react';
import { Layout } from '@pinua/common/components';
import { Text } from '@pinua/uikit';
import styles from './home.scss';

const Home = () => {
  return (
    <Layout className={styles.page}>
      <Text>
        Сторінка <b>Головна</b> знаходиться на стадіії розробки...
      </Text>
    </Layout>
  );
};

export default Home;
