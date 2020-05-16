import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text, Button } from '@pinua/uikit';
import { SideBar } from '@pinua/common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import i18n from 'i18n';

import styles from './filter.mobile.sidebar.scss';

const MobileSidebarFilter = ({ className, children, isOpen, onClose, ...props }) => {
  return (
    <SideBar className={cn(styles.sidebar, className)} isOpen={isOpen} position="right">
      <Box padding="m" direction="column" fullWidth>
        <Box className={styles.close} justify="end" align="center" onClick={onClose} bottom="m">
          <Text size="s" color="primary" right="s">
            {i18n.t('common.close')}
          </Text>
          <FontAwesomeIcon className={styles.icon} icon={faTimes} />
        </Box>
        {children}
        <Button top="s" onClick={onClose}>
          {i18n.t('common.apply')}
        </Button>
      </Box>
    </SideBar>
  );
};

MobileSidebarFilter.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default memo(MobileSidebarFilter);
