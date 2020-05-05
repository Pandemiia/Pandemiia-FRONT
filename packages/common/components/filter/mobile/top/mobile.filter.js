import React, { memo, useCallback, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Button } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

import i18n from 'i18n';

import styles from './filter.mobile.top.scss';

const MobileFilterTop = ({ className, filterStatus, onFilterClick, sortStatus, onSortClick, ...props }) => {
  const [filterOpen, toggleFilter] = useState(filterStatus);
  const [sortOpen, toggleSort] = useState(false);

  useEffect(() => {
    toggleFilter(filterStatus);
    toggleSort(sortStatus);
  }, [filterStatus, sortStatus]);

  const handleFilterClick = useCallback(() => {
    const data = !filterOpen;
    toggleFilter(data);
    onFilterClick && onFilterClick(data);
  }, [filterOpen, onFilterClick]);

  const handleSortClick = useCallback(() => {
    const data = !sortOpen;
    toggleSort(data);
    onSortClick && onSortClick(data);
  }, [onSortClick, sortOpen]);

  return (
    <Box className={cn(styles.filter, className)} fullWidth>
      <Button
        className={cn(styles.button, {
          [styles.active]: sortOpen
        })}
        color={sortOpen ? 'primary' : 'transparent'}
        onClick={handleSortClick}
        iconRight={<FontAwesomeIcon className={styles.icon} icon={faArrowsAltV} />}
      >
        {i18n.t('filter.mobile.sort')}
      </Button>
      <Button
        className={cn(styles.button, {
          [styles.active]: filterOpen
        })}
        color={filterOpen ? 'primary' : 'transparent'}
        onClick={handleFilterClick}
        iconRight={<FontAwesomeIcon className={styles.icon} icon={faFilter} />}
      >
        {i18n.t('filter.mobile.filter')}
      </Button>
    </Box>
  );
};

MobileFilterTop.defaultProps = {
  filterStatus: false,
  sortStatus: false
};

MobileFilterTop.propTypes = {
  className: PropTypes.string,
  onFilterClick: PropTypes.func,
  onSortClick: PropTypes.func,
  filterStatus: PropTypes.bool,
  sortStatus: PropTypes.bool
};

export default memo(MobileFilterTop);
