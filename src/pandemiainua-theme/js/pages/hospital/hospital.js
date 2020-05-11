import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@pinua/common/components';
import { Box } from '@pinua/uikit';

import styles from './hospital.scss';

const Hospital = ({ id, loadHospital, ...props }) => {
  useEffect(() => {
    loadHospital(id);
  }, [loadHospital, id]);

  return (
    <Layout className={styles.page}>
      <Box top="l" bottom="l"></Box>
      <Box direction="column" fullWidth>
        <Box fullWidth>Hospital {id} page</Box>
      </Box>
    </Layout>
  );
};

Hospital.propTypes = {
  id: PropTypes.string,
  loadHospital: PropTypes.func
};

export default memo(Hospital);
