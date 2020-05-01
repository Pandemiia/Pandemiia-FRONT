import React from 'react';
import { Layout } from '@pinua/common/components';
import DropdownList from '@pinua/uikit/DropdownList';
import { optionsList } from './constants';
import styles from './needs.scss';

const Needs = () => {
  return (
    <Layout className={styles.page}>
      <DropdownList options={optionsList} />
    </Layout>
  );
};

export default Needs;
