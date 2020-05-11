import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Box from '@pinua/uikit/box';

import styles from './search.scss';

const Search = ({ label, className, onChange, placeholder, id, ...props }) => {
  const localId = id || 'search-input';
  return (
    <Box className={cn(styles.searchInputWrapper, className)}>
      {label && <label htmlFor={localId}>{label}</label>}
      <input {...props} id={localId} type="text" onChange={onChange} placeholder={placeholder} />
    </Box>
  );
};

Search.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Search;
