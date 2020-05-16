import React from 'react';
import { Layout } from '@pinua/common/components';
import { Text } from '@pinua/uikit';

import styles from './about.scss';

const About = () => {
  return (
    <Layout className={styles.page}>
      <Text>
        Сторінка <b>Про нас</b> знаходиться на стадіії розробки...
      </Text>
    </Layout>
  );
};

export default About;
