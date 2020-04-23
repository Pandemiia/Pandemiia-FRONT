import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import SideBar from '@pinua/common/components/sidebar';
import { Box, Text } from '@pinua/uikit';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';

import i18n from 'i18n';

import styles from './menu.css';

const Menu = ({ path, links, isOpen, onClose, ...props }) => {
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
          <Text size="s" intent="navigational">
            {i18n.t('common.close')}
          </Text>
          <IconContext.Provider value={{ className: styles.icon }}>
            <MdClose />
          </IconContext.Provider>
        </Box>
        <Box className={styles.title} direction="column" justify="center" align="center">
          <Text size="l" intent="navigational" align="center">
            {i18n.t('menu.intro')}
          </Text>
        </Box>
        <Box direction="column" justify="center" align="center">
          {items}
        </Box>
      </Box>
    </SideBar>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool,
  links: PropTypes.array,
  onClose: PropTypes.func,
  path: PropTypes.string
};

Menu.defaultProps = {
  isOpen: false,
  links: []
};

export default memo(Menu);
