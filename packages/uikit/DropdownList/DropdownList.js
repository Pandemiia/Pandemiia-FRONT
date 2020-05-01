import React from 'react';
import PropTypes from 'prop-types';
import Box from '@pinua/uikit/box';
import DropdownIcon from './DropdownIcon';
import styles from './DropdownList.scss';

const DropdownList = ({ options, ...props }) => {
  return (
    <Box className={styles.selectWrapper}>
      <DropdownIcon />
      <select className={styles.dropDown} {...props}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </Box>
  );
};

DropdownList.propTypes = {
  options: PropTypes.array.isRequired
};

export default DropdownList;
