import React, { memo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Layout, Filter } from '@pinua/common/components';
import { Pagination } from 'components';
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

  const renderHospitals = useCallback(({ id, description, email, name }) => {
    return (
      <Box left="l" padding="m" key={id} direction="column">
        <Text>id: {id}</Text>
        <Text>description: {description}</Text>
        <Text>email: {email}</Text>
        <Text>name: {name}</Text>
      </Box>
    );
  }, []);

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box>
          <Text size="l">{i18n.t('hospitals.title')}</Text>
        </Box>
        <Box fullWidth>
          <Box direction="column">
            <Filter title={i18n.t('filter.regions')} data={regions} onChange={handleFilterChange(0)} />
            <Box top="l" direction="column">
              <Filter title={i18n.t('filter.types')} data={types} itemsLength={5} onChange={handleFilterChange(1)} />
            </Box>
            <Box top="l" direction="column">
              <Filter title={i18n.t('filter.needs')} data={needs} itemsLength={5} onChange={handleFilterChange(2)} />
            </Box>
          </Box>
          <Box>{hospitals.map(renderHospitals)}</Box>
          <Pagination />
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
