import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';
import styles from './showResult.scss';

const ShowResult = ({ total }) => {
  return (
    <Box className={styles.counterTotal}>
      <span className={styles.show}>Показано: </span>
      {total} результатів
    </Box>
  );
};

ShowResult.propTypes = {
  total: PropTypes.string
};

export default ShowResult;
