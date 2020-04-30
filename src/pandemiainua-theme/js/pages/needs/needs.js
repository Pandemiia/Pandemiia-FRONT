import React from 'react';
import { Layout, TitlePage, ShowResult } from '@pinua/common/components';
import Search from '@pinua/uikit/search';
import { Box } from '@pinua/uikit';
import styles from './needs.scss';

const Needs = () => {
  return (
    <Layout className={styles.page}>
      <Box direction="column">
        <TitlePage title="Актуальні потреби" counter="1,087" />
        <br />
        <ShowResult total="366" />
        <br />
        <Search />
      </Box>
    </Layout>
  );
};

export default Needs;
