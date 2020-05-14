import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';

import i18n from 'i18n';

import styles from './description.scss';

const CardDescription = ({ className, description, definition, instruction, ...props }) => {
  return (
    <Box className={cn(styles.description, className)} fullWidth padding="s" direction="column">
      <Box fullWidth bottom="m" justify="start" align="start" direction="column">
        <Text size="m" bold align="left" bottom="s">
          {i18n.t('solutions.definition')}
        </Text>
        <Text color="info" size="s" align="left">
          {definition}
        </Text>
      </Box>
      <Box fullWidth bottom="m" justify="start" align="start" direction="column">
        <Text size="m" bold align="left" bottom="s">
          {i18n.t('solutions.description')}
        </Text>
        <Text color="info" size="s" align="left">
          {description}
        </Text>
      </Box>
      <Box fullWidth justify="start" align="start" direction="column">
        <Text size="m" bold align="left" bottom="s">
          {i18n.t('solutions.instruction')}
        </Text>
        <Text color="info" size="s" align="left">
          {instruction}
        </Text>
      </Box>
    </Box>
  );
};

export const descriptionProps = {
  className: PropTypes.string,
  description: PropTypes.string,
  definition: PropTypes.string,
  instruction: PropTypes.string
};

CardDescription.propTypes = descriptionProps;

export default memo(CardDescription);
