import React, { memo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Cards, HospitalCard } from 'components';
import { Layout, Filter, MobileTopFilter, MobileSidebarFilter } from '@pinua/common/components';
import { Box, Text, Search } from '@pinua/uikit';
import { Media, TABLET_MAX_WIDTH } from '@pinua/utils';

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
  filterOpen,
  toggleFilter,
  ...props
}) => {
  useEffect(() => {
    loadHospitalRegions();
    loadHospitalNeedsCategories();
    loadHospitalTypes();
  }, [loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes]);

  const [params, setParams] = useState([]);
  const [data, setHospitals] = useState(hospitals);
  const [regionsData, setRegions] = useState(regions);

  useEffect(() => {
    setHospitals(hospitals);
  }, [hospitals]);

  useEffect(() => {
    setRegions(regions);
  }, [regions]);

  const handleRegionsSearch = useCallback(
    ({ target }) => {
      const { value } = target;
      const filteredRegions = regions.filter(el => el.label.includes(value));
      setRegions(filteredRegions);
    },
    [regions]
  );

  const handleSearch = useCallback(
    ({ target }) => {
      const { value } = target;
      const filteredHospitals = hospitals.filter(el => el.name.includes(value));
      setHospitals(filteredHospitals);
    },
    [hospitals]
  );

  const handleCloseFilter = useCallback(() => {
    toggleFilter(false);
  }, [toggleFilter]);

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

  const renderFilters = useCallback(() => {
    return (
      <Box direction="column" right="m">
        <Filter title={i18n.t('filter.regions')} data={regionsData} onChange={handleFilterChange(0)}>
          <Box fullWidth bottom="m" top="m">
            <Search
              onChange={handleRegionsSearch}
              className={styles.filterSearch}
              placeholder={i18n.t('search.regions')}
              id="filter"
            />
          </Box>
        </Filter>
        <Box top="l" direction="column">
          <Filter title={i18n.t('filter.types')} data={types} itemsLength={5} onChange={handleFilterChange(1)} />
        </Box>
        <Box top="l" direction="column">
          <Filter title={i18n.t('filter.needs')} data={needs} itemsLength={5} onChange={handleFilterChange(2)} />
        </Box>
      </Box>
    );
  }, [handleRegionsSearch, regionsData, handleFilterChange, types, needs]);

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box top="l" bottom="l">
          <Text size="l">{i18n.t('hospitals.title')}</Text>
        </Box>
        <Box fullWidth>
          <Media query={{ maxWidth: TABLET_MAX_WIDTH }}>
            {matches =>
              matches ? (
                <>
                  <Box fullWidth direction="column">
                    <MobileTopFilter filterStatus={filterOpen} onFilterClick={toggleFilter} />
                    <Box fullWidth bottom="m">
                      <Search onChange={handleSearch} className={styles.search} />
                    </Box>
                    <Cards top="m" items={data} card={HospitalCard} />
                  </Box>
                  <MobileSidebarFilter isOpen={filterOpen} onClose={handleCloseFilter}>
                    {renderFilters()}
                  </MobileSidebarFilter>
                </>
              ) : (
                <>
                  {renderFilters()}
                  <Box direction="column" fullWidth>
                    <Box fullWidth bottom="m" justify="end" align="center">
                      <Search
                        onChange={handleSearch}
                        className={styles.search}
                        placeholder={i18n.t('search.hospitals')}
                      />
                    </Box>
                    <Cards items={data} card={HospitalCard} />
                  </Box>
                </>
              )
            }
          </Media>
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
  filterOpen: PropTypes.bool,
  loadHospitals: PropTypes.func,
  loadHospitalRegions: PropTypes.func,
  loadHospitalNeedsCategories: PropTypes.func,
  loadHospitalTypes: PropTypes.func,
  toggleFilter: PropTypes.func
};

export default memo(Hospitals);
