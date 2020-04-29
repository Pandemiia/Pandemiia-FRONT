import React from 'react';
import { Layout, TitlePage } from '@pinua/common/components';

import styles from './needs.scss';

const Needs = () => {
  return (
    <Layout className={styles.page}>
      <TitlePage title="Актуальні потреби" counter="1,087" />
    </Layout>
  );
};

export default Needs;
