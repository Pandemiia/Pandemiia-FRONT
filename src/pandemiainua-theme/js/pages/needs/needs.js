import React from 'react';
import { Layout, TitlePage, ShowResult } from '@pinua/common/components';
import Search from '@pinua/uikit/Search';
import styles from './needs.scss';

const Needs = () => {
  return (
    <Layout className={styles.page}>
      <TitlePage title="Актуальні потреби" counter="1,087" />
      <ShowResult total="366" />
      <Search />
    </Layout>
  );
};

export default Needs;
