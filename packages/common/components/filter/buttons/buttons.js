import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Button } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './buttons.scss';

export const ToggleSelection = ({ className, onSelectAll, onClear, isSelected, ...props }) => {
  const [selected, setSelected] = useState(isSelected);

  const handleSelectAll = useCallback(() => {
    setSelected(true);
    onSelectAll && onSelectAll();
  }, [setSelected, onSelectAll]);

  const handleClear = useCallback(() => {
    setSelected(false);
    onClear && onClear();
  }, [setSelected, onClear]);

  return (
    <Box className={cn(styles.selectionButtons, className)} justify="end" align="center">
      {selected ? (
        <Button className={styles.clear} onClick={handleClear} color="transparent" size="s">
          {i18n.t('common.clear')}
        </Button>
      ) : (
        <Button className={styles.select} onClick={handleSelectAll} color="transparent" size="s">
          {i18n.t('common.selectAll')}
        </Button>
      )}
    </Box>
  );
};

ToggleSelection.defaultProps = {
  isSelected: false
};

ToggleSelection.propTypes = {
  className: PropTypes.string,
  onSelectAll: PropTypes.func,
  onClear: PropTypes.func,
  isSelected: PropTypes.bool
};

export const ToggleScrollButtons = ({ className, onShow, onHide, isOpen, ...props }) => {
  const [open, setSelected] = useState(isOpen);

  const handleShow = useCallback(() => {
    setSelected(true);
    onShow && onShow();
  }, [setSelected, onShow]);

  const handleHide = useCallback(() => {
    setSelected(false);
    onHide && onHide();
  }, [setSelected, onHide]);

  return (
    <Box className={cn(styles.scrollButtons, className)} fullWidth>
      {open ? (
        <Button
          className={styles.less}
          color="warn"
          onClick={handleHide}
          size="s"
          iconRight={<FontAwesomeIcon className={styles.arrow} icon={faLongArrowAltUp} />}
        >
          {i18n.t('common.showLess')}
        </Button>
      ) : (
        <Button
          className={styles.more}
          color="info"
          onClick={handleShow}
          size="s"
          iconRight={<FontAwesomeIcon className={styles.arrow} icon={faLongArrowAltDown} />}
        >
          {i18n.t('common.showMore')}
        </Button>
      )}
    </Box>
  );
};

ToggleScrollButtons.defaultProps = {
  isOpen: false
};

ToggleScrollButtons.propTypes = {
  className: PropTypes.string,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  isOpen: PropTypes.bool
};
