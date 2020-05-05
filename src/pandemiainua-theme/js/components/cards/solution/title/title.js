import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './title.scss';

const CardTitle = ({ className, open, name, image, code, onClick, ...props }) => {
  return (
    <Box className={cn(styles.title, className)} fullWidth onClick={onClick} padding="s">
      <Box className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={name} />
      </Box>
      <Box className={styles.infoWrapper} direction="column" justify="start" align="start">
        <Text color="info" size="s" align="left">
          {code}
        </Text>
        <Text align="left">{name}</Text>
      </Box>
      <Box className={styles.arrow} justify="center" align="center">
        <FontAwesomeIcon icon={open ? faChevronDown : faChevronRight} />
      </Box>
    </Box>
  );
};

export const titleProps = {
  className: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  code: PropTypes.string,
  open: PropTypes.bool,
  onClick: PropTypes.func
};

CardTitle.propTypes = titleProps;

export default memo(CardTitle);
