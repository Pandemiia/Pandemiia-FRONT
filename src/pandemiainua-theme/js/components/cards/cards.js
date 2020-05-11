import React, { memo, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';

import styles from './cards.scss';

const Cards = ({ items, card: Component, className, ...props }) => {
  const renderCards = useCallback(() => {
    return items.map(({ id, ...rest }) => <Component key={`card-${id}`} id={id} {...rest} />);
  }, [items]);

  return (
    <Box className={cn(styles.cards, className)} fullWidth direction="column" {...props}>
      {renderCards()}
    </Box>
  );
};

Cards.propTypes = {
  items: PropTypes.array,
  card: PropTypes.object,
  className: PropTypes.string
};

export default memo(Cards);
