import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './contacts.scss';

const Contacts = ({ phone, fullName, position, email, className, ...props }) => {
  return (
    <Box className={cn(styles.contacts, className)} fullWidth direction="column" {...props}>
      {phone && (
        <Box fullWidth bottom="s">
          <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
          <Text className={styles.phone} color="navigational" size="s" component="a" href={`tel:${phone}`} bold>
            {phone}
          </Text>
        </Box>
      )}
      {fullName && position && (
        <Box fullWidth bottom="s" left="m">
          <Text left="s" color="info" size="s">{`${fullName}, ${position}`}</Text>
        </Box>
      )}
      {email && (
        <Box fullWidth bottom="s">
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <Text color="info" size="s" component="a" href={`mailto:${email}`}>
            {email}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export const contactsPropTypes = {
  phone: PropTypes.string,
  id: PropTypes.number,
  email: PropTypes.string,
  position: PropTypes.string,
  fullName: PropTypes.string
};

Contacts.propTypes = contactsPropTypes;

export default memo(Contacts);
