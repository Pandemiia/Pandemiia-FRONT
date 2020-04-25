import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import SideBar from '@pinua/common/components/sidebar';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './mobile.menu.scss';

const MobileMenu = ({ path, links, isOpen, onClose, children, ...props }) => {
  const renderItems = item => (
    <Link
      key={item.name}
      className={cn(styles.link, {
        [styles.active]: path === item.path
      })}
      to={item.path}
      onClick={onClose}
    >
      {item.name}
    </Link>
  );

  const items = links.map(renderItems);

  return (
    <SideBar isOpen={isOpen}>
      <Box direction="column" padding="m">
        <Box className={styles.close} justify="end" align="center" onClick={onClose}>
          <Text size="s" color="primary" right="s">
            {i18n.t('common.close')}
          </Text>
          <FontAwesomeIcon className={styles.icon} icon={faTimes} />
        </Box>
        <Box className={styles.title} direction="column" justify="center" align="center">
          <Text size="m" intent="navigational" align="center">
            {i18n.t('sidebar.intro')}
          </Text>
        </Box>
        {children}
        <Box direction="column" justify="center" align="center">
          {items}
        </Box>
      </Box>
    </SideBar>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
  links: PropTypes.array,
  onClose: PropTypes.func,
  path: PropTypes.string
};

MobileMenu.defaultProps = {
  isOpen: false,
  links: []
};

export default memo(MobileMenu);
