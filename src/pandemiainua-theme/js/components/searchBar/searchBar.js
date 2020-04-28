import React from 'react';
import PropTypes from 'prop-types';
import { SearchInput } from '@pinua/uikit';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './searchBar.scss';
import Select from '../select';

const optionsList = [
  { label: 'Найбільш актуальні', value: 'test' },
  { label: 'Найбільш актуальні', value: 'test' },
  { label: 'Найбільш актуальні', value: 'test' }
];

const searchBar = ({ total, handleChange }) => {
  return (
    <div className={styles.searchBarWrapper}>
      <p className={styles.counterTotal}>
        <span className={styles.show}>Показано: </span>
        {total} результатів
      </p>
      <Select options={optionsList} />
      <SearchInput id="search-result" />
      {/* <Box className={styles.search}>
        <input type="text" name="" placeholder="Пошук серед закладів" onChange={handleChange} />
        <button type="submit" name="" value="">
          <FontAwesomeIcon icon={faSearch} alt="Search Icon" onClick={handleChange} />
        </button>
      </Box> */}
    </div>
  );
};

searchBar.propTypes = {
  total: PropTypes.number,
  handleChange: PropTypes.func.isRequired
};

export default searchBar;
