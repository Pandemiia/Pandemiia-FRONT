import React, { memo, useCallback, useEffect, useState } from 'react';
import i18n from 'i18n';
import PropTypes from 'prop-types';
import { Cards, SolutionCard } from 'components';
import { Layout, Filter, MobileTopFilter, MobileSidebarFilter } from '@pinua/common/components';
import { Box, Search, Text } from '@pinua/uikit';
import { Media, TABLET_MAX_WIDTH } from '@pinua/utils';
import _toLower from 'lodash/toLower';

import styles from './solutions.scss';

const Solutions = ({
  solutions,
  materials,
  categories,
  tools,
  filterOpen,
  loadSolutionsTools,
  loadSolutionsCategories,
  loadSolutionsMaterials,
  loadSolutions,
  toggleFilter,
  ...props
}) => {
  useEffect(() => {
    loadSolutionsTools();
    loadSolutionsCategories();
    loadSolutionsMaterials();
    loadSolutions();
  }, [loadSolutions, loadSolutionsTools, loadSolutionsCategories, loadSolutionsMaterials]);

  const [params, setParams] = useState([]);
  const [dataSolutions, setSolutions] = useState(solutions);

  useEffect(() => {
    setSolutions(solutions);
  }, [solutions]);

  const handleCloseFilter = useCallback(() => {
    toggleFilter(false);
  }, [toggleFilter]);

  const handleSearch = useCallback(
    ({ target }) => {
      const { value } = target;
      const filteredSolutions = solutions.filter(el => {
        const { name } = el;
        return _toLower(name).includes(_toLower(value));
      });
      setSolutions(filteredSolutions);
    },
    [solutions]
  );

  const handleFilterChange = useCallback(
    number => value => {
      const arr = [...params];

      arr[number] = value;

      const [categories, materials, tools] = arr;

      setParams(arr);
      loadSolutions({ categories, materials, tools });
    },
    [loadSolutions, params]
  );

  const renderFilters = useCallback(() => {
    return (
      <Box direction="column" right="m">
        <Filter onChange={handleFilterChange(0)} title={i18n.t('filter.categories')} data={categories} />
        <Box top="l" direction="column">
          <Filter
            onChange={handleFilterChange(1)}
            title={i18n.t('filter.materials')}
            data={materials}
            itemsLength={5}
          />
        </Box>
        <Box top="l" direction="column">
          <Filter onChange={handleFilterChange(2)} title={i18n.t('filter.tools')} data={tools} itemsLength={5} />
        </Box>
      </Box>
    );
  }, [categories, handleFilterChange, materials, tools]);

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box top="l" bottom="l">
          <Text size="l">{i18n.t('solutions.title')}</Text>
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
                        placeholder={i18n.t('search.solutions')}
                      />
                    </Box>
                    <Cards top="m" items={dataSolutions} card={SolutionCard} />
                  </Box>
                  <Box fullWidth direction="column">
                    <MobileTopFilter filterStatus={filterOpen} onFilterClick={toggleFilter} />
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
                          {i18n.t('solutions.count')}
                        </Text>
                        <Text left="s" size="s" color="primary">
                          {dataSolutions.length} {i18n.t('solutions.results')}
                        </Text>
                      </Box>
                      <Search
                        onChange={handleSearch}
                        className={styles.search}
                        placeholder={i18n.t('search.solutions')}
                      />
                    </Box>
                    <Cards items={dataSolutions} card={SolutionCard} />
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

Solutions.defaultProps = {
  materials: [],
  categories: [],
  tools: []
};

Solutions.propTypes = {
  solutions: PropTypes.array,
  materials: PropTypes.array,
  categories: PropTypes.array,
  tools: PropTypes.array,
  filterOpen: PropTypes.bool,
  loadSolutionsTools: PropTypes.func,
  loadSolutionsCategories: PropTypes.func,
  loadSolutionsMaterials: PropTypes.func,
  loadSolutions: PropTypes.func,
  toggleFilter: PropTypes.func
};

export default memo(Solutions);
