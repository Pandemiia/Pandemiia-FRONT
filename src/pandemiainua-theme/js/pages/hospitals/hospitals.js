import React, { memo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Layout, Filter } from '@pinua/common/components';
import { Cards, HospitalCard } from 'components';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './hospitals.scss';

const Hospitals = ({
  hospitals,
  regions,
  types,
  needs,
  loadHospitals,
  loadHospitalRegions,
  loadHospitalNeedsCategories,
  loadHospitalTypes,
  ...props
}) => {
  useEffect(() => {
    loadHospitalRegions();
    loadHospitalNeedsCategories();
    loadHospitalTypes();
  }, [loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes]);

  const [params, setParams] = useState([]);

  const handleFilterChange = useCallback(
    number => value => {
      const arr = [...params];

      arr[number] = value;

      const [regions, types, needs] = arr;

      setParams(arr);
      loadHospitals({ regions, types, needs });
    },
    [loadHospitals, params]
  );

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box top="l" bottom="l">
          <Text size="l">{i18n.t('hospitals.title')}</Text>
        </Box>
        <Box fullWidth>
          <Box direction="column" right="m">
            <Filter title={i18n.t('filter.regions')} data={regions} onChange={handleFilterChange(0)} />
            <Box top="l" direction="column">
              <Filter title={i18n.t('filter.types')} data={types} itemsLength={5} onChange={handleFilterChange(1)} />
            </Box>
            <Box top="l" direction="column">
              <Filter title={i18n.t('filter.needs')} data={needs} itemsLength={5} onChange={handleFilterChange(2)} />
            </Box>
          </Box>
          <Box direction="column" fullWidth>
            <Cards items={hospitals} card={HospitalCard} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

Hospitals.defaultProps = {
  regions: [],
  types: [],
  needs: []
};

Hospitals.propTypes = {
  history: PropTypes.object,
  regions: PropTypes.array,
  hospitals: PropTypes.array,
  types: PropTypes.array,
  needs: PropTypes.array,
  loadHospitals: PropTypes.func,
  loadHospitalRegions: PropTypes.func,
  loadHospitalNeedsCategories: PropTypes.func,
  loadHospitalTypes: PropTypes.func
};

export default memo(Hospitals);
