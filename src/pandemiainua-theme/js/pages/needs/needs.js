import React from 'react';
import { Layout, TitlePage, ShowResult } from '@pinua/common/components';

import DropdownList from '@pinua/uikit/DropdownList';
import { optionsList } from './constants';

import styles from './needs.scss';

const Needs = () => {
  return (
    <Layout className={styles.page}>
      <TitlePage title="Актуальні потреби" counter="1,087" />
      <ShowResult total="366" />

      <DropdownList options={optionsList} />
    </Layout>
  );
};

export default Needs;
