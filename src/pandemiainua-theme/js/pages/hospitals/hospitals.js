import React, { memo, useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Cards, HospitalCard } from 'components';
import { Layout, Filter, MobileTopFilter, MobileSidebarFilter } from '@pinua/common/components';
import { Box, Text, Search, Pagination } from '@pinua/uikit';
// import DropdownList from '@pinua/uikit/dropdown';
import { Media, TABLET_MAX_WIDTH } from '@pinua/utils';
import _toLower from 'lodash/toLower';

import i18n from 'i18n';

import styles from './hospitals.scss';

const Hospitals = ({
  hospitals,
  total,
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
    loadHospitals();
  }, [loadHospitals, loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes]);

  const [params, setParams] = useState([]);
  const [dataHospitals, setHospitals] = useState(hospitals);
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
      const filteredRegions = regions.filter(el => {
        const { label } = el;
        return _toLower(label).includes(_toLower(value));
      });
      setRegions(filteredRegions);
    },
    [regions]
  );

  const handleSearch = useCallback(
    ({ target }) => {
      const { value } = target;
      const filteredHospitals = hospitals.filter(el => {
        const { name } = el;
        return _toLower(name).includes(_toLower(value));
      });
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

  const handlePage = useCallback(
    selected => {
      const [regions, types, needs] = params;

      loadHospitals({ regions, types, needs, page: selected });
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
                      <Search
                        onChange={handleSearch}
                        className={styles.search}
                        placeholder={i18n.t('search.hospitals')}
                      />
                    </Box>
                    <Cards top="m" items={dataHospitals} card={HospitalCard} />
                  </Box>
                  <MobileSidebarFilter isOpen={filterOpen} onClose={handleCloseFilter}>
                    {renderFilters()}
                  </MobileSidebarFilter>
                </>
              ) : (
                <>
                  {renderFilters()}
                  <Box direction="column" fullWidth>
                    <Box fullWidth bottom="m" justify="between" align="center">
                      <Box>
                        <Text size="s" color="info">
                          {i18n.t('hospitals.count')}
                        </Text>
                        <Text left="s" size="s" color="primary">
                          {dataHospitals.length} {i18n.t('hospitals.results')}
                        </Text>
                      </Box>
                      {/* <DropdownList /> */}
                      <Search
                        onChange={handleSearch}
                        className={styles.search}
                        placeholder={i18n.t('search.hospitals')}
                      />
                    </Box>
                    <Cards items={dataHospitals} card={HospitalCard} />
                  </Box>
                </>
              )
            }
          </Media>
        </Box>
        {total > 3 && <Pagination onPageChange={handlePage} total={total} perPage={3} />}
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
  total: PropTypes.number,
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
