import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';

import styles from './card.scss';

const Card = ({ className, fullWidth, children, padding, ...props }) => {
  return (
    <Box padding={padding} className={cn(styles.card, className)} fullWidth={fullWidth} {...props}>
      {children}
    </Box>
  );
};

Card.defaultTypes = {
  fullWidth: true,
  padding: 'l'
};

Card.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  padding: PropTypes.oneOf(['s', 'm', 'l', 'xl'])
};

export default memo(Card);
