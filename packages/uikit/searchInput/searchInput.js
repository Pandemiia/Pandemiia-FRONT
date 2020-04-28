import React from 'react';
import PropTypes from 'prop-types';
import Box from '@pinua/uikit/box';

import styles from './searchInput.scss';

const searchInput = ({ label, id, ...props }) => {
  const localId = id || 'search-input';
  return (
    <Box className={styles.searchInputWrapper}>
      {label && <label htmlFor={localId}>{label}</label>}
      <input {...props} id={localId} type="text" placeholder="Пошук серед закладів" />
    </Box>
  );
};

searchInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};

export default searchInput;
