import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@pinua/common/components';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './needs.scss';

const Needs = ({ regions, loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes, ...props }) => {
  useEffect(() => {
    loadHospitalRegions();
    loadHospitalNeedsCategories();
    loadHospitalTypes();
  }, [loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes]);

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box>
          <Text size="l">{i18n.t('needs.title')}</Text>
        </Box>
        <Box></Box>
      </Box>
    </Layout>
  );
};

Needs.propTypes = {
  regions: PropTypes.object,
  loadHospitalRegions: PropTypes.func,
  loadHospitalNeedsCategories: PropTypes.func,
  loadHospitalTypes: PropTypes.func
};

export default memo(Needs);
