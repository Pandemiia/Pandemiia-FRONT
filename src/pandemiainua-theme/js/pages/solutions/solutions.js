import React, { memo, useCallback, useEffect } from 'react';
import i18n from 'i18n';
import PropTypes from 'prop-types';
import { Layout, Filter, MobileTopFilter, MobileSidebarFilter } from '@pinua/common/components';
import { Box, Text } from '@pinua/uikit';
import { Media, TABLET_MAX_WIDTH } from '@pinua/utils';

import styles from './solutions.scss';

const Solutions = ({
  materials,
  categories,
  tools,
  filterOpen,
  loadSolutionsTools,
  loadSolutionsCategories,
  loadSolutionsMaterials,
  toggleFilter,
  ...props
}) => {
  useEffect(() => {
    loadSolutionsTools();
    loadSolutionsCategories();
    loadSolutionsMaterials();
  }, [loadSolutionsTools, loadSolutionsCategories, loadSolutionsMaterials]);

  const handleCloseFilter = useCallback(() => {
    toggleFilter(false);
  }, [toggleFilter]);

  const renderFilters = useCallback(() => {
    return (
      <Box direction="column">
        <Filter title={i18n.t('filter.categories')} data={categories} />
        <Box top="l" direction="column">
          <Filter title={i18n.t('filter.materials')} data={materials} itemsLength={5} />
        </Box>
        <Box top="l" direction="column">
          <Filter title={i18n.t('filter.tools')} data={tools} itemsLength={5} />
        </Box>
      </Box>
    );
  }, [categories, materials, tools]);

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
                  </Box>
                  <MobileSidebarFilter isOpen={filterOpen} onClose={handleCloseFilter}>
                    {renderFilters()}
                  </MobileSidebarFilter>
                </>
              ) : (
                <>
                  {renderFilters()}
                  <Box direction="column" fullWidth></Box>
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
  materials: PropTypes.array,
  categories: PropTypes.array,
  tools: PropTypes.array,
  filterOpen: PropTypes.bool,
  loadSolutionsTools: PropTypes.func,
  loadSolutionsCategories: PropTypes.func,
  loadSolutionsMaterials: PropTypes.func,
  toggleFilter: PropTypes.func
};

export default memo(Solutions);
