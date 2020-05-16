import React from 'react';
import Box from '@pinua/uikit/box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './dropdown.scss';

const DropdownList = ({ ...props }) => {
  return (
    <Box className={styles.selectWrapper}>
      <FontAwesomeIcon icon={faChevronDown} />
      <select className={styles.dropDown} {...props}>
        <option>Найбільш актуальні</option>
      </select>
    </Box>
  );
};

export default DropdownList;
