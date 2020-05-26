import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '@pinua/common/components';

import SideBar from '@pinua/common/components/sidebar';
import { Box } from '@pinua/uikit';

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
  const history = useHistory();
  function handleNavigateHome() {
    history.push('/');
  }

  return (
    <SideBar isOpen={isOpen}>
      <Box direction="column" padding="m">
        <Box className={styles.close} justify="start" align="center" onClick={onClose}>
          <FontAwesomeIcon className={styles.icon} icon={faTimes} />
          <Logo className={styles.logo} onClick={handleNavigateHome} />
        </Box>
        <Box className={styles.itemsMargin} direction="column" justify="center" align="center">
          {items}
        </Box>
        {children}
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
