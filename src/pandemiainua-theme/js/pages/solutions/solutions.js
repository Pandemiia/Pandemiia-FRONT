import React, { memo, useEffect } from 'react';
import i18n from 'i18n';
import PropTypes from 'prop-types';
import { Layout, Filter } from '@pinua/common/components';
import { Box, Text } from '@pinua/uikit';

import styles from './solutions.scss';

const Solutions = ({
  materials,
  categories,
  tools,
  loadSolutionsTools,
  loadSolutionsCategories,
  loadSolutionsMaterials,
  ...props
}) => {
  useEffect(() => {
    loadSolutionsTools();
    loadSolutionsCategories();
    loadSolutionsMaterials();
  }, [loadSolutionsTools, loadSolutionsCategories, loadSolutionsMaterials]);

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box>
          <Text size="l">{i18n.t('solutions.title')}</Text>
        </Box>
        <Box direction="column">
          <Filter title={i18n.t('filter.categories')} data={categories} />
          <Box top="l" direction="column">
            <Filter title={i18n.t('filter.materials')} data={materials} itemsLength={5} />
          </Box>
          <Box top="l" direction="column">
            <Filter title={i18n.t('filter.tools')} data={tools} itemsLength={5} />
          </Box>
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
  loadSolutionsTools: PropTypes.func,
  loadSolutionsCategories: PropTypes.func,
  loadSolutionsMaterials: PropTypes.func
};

export default memo(Solutions);
