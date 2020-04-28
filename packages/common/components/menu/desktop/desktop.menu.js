import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';
import { Link } from 'react-router-dom';

import styles from './desktop.menu.scss';

const DesktopMenu = ({ path, links, className, ...props }) => {
  const renderItems = item => (
    <Link
      key={item.name}
      className={cn(styles.link, {
        [styles.active]: path === item.path
      })}
      to={item.path}
    >
      {item.name}
    </Link>
  );

  const items = links.map(renderItems);

  return (
    <Box className={cn(styles.menu, className)} justify="start" align="center" fullWidth top="s">
      {items}
    </Box>
  );
};

DesktopMenu.propTypes = {
  links: PropTypes.array,
  path: PropTypes.string,
  className: PropTypes.string
};

DesktopMenu.defaultProps = {
  links: []
};

export default memo(DesktopMenu);
