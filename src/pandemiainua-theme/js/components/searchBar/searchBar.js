import React from 'react';
import PropTypes from 'prop-types';
import styles from './searchBar.scss';
import Select from '../select';

const optionsList = [
  { label: 'Найбільш актуальні', value: 'test' },
  { label: 'Найбільш актуальні', value: 'test' }
];

function searchBar({ total, handleChange }) {
  return (
    <div className={styles.searchBarWrapper}>
      <p className={styles.counterTotal}>
        <span className={styles.show}>Показано: </span>
        {total} результатів
      </p>
      <Select options={optionsList} />
      <input type="text" placeholder="Пошук серед закладів" onChange={handleChange} />
    </div>
  );
}

searchBar.propTypes = {
  total: PropTypes.number,
  handleChange: PropTypes.func.isRequired
};

export default searchBar;
