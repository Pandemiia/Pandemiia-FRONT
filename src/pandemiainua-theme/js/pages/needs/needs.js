import React from 'react';
import { Layout } from '@pinua/common/components';
import { TitlePage, SearchBar } from '../../components';

import styles from './needs.scss';

const Needs = () => {
  return (
    <Layout className={styles.page}>
      <TitlePage title="Актуальні потреби" counter="1,087" />
      <div className={styles.infoBlock}>
        <div className={styles.columnLeft}>колонkа области</div>
        <div className={styles.columnRight}>
          <SearchBar handleChange={() => {}} total="366" />
        </div>
      </div>
    </Layout>
  );
};

export default Needs;
