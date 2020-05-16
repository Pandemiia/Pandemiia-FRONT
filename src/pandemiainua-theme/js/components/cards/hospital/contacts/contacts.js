import React, { memo, useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { textTrimmer } from '@pinua/utils';

import i18n from 'i18n';

import styles from './contacts.scss';

const MAX_TEXT_LENGTH = 150;

const Contacts = ({ phone, fullName, position, email, className, ...props }) => {
  const [open, showPhone] = useState(false);

  const handlePhoneOpen = useCallback(() => {
    showPhone(true);
  }, [showPhone]);

  return (
    <Box className={cn(styles.contacts, className)} fullWidth direction="column" {...props}>
      {phone && (
        <Box fullWidth bottom="s">
          <FontAwesomeIcon className={styles.icon} icon={faPhoneAlt} />
          <Text
            className={cn(styles.phone, {
              [styles.closed]: !open
            })}
            color="navigational"
            size="s"
            component={open ? 'a' : 'p'}
            href={`tel:${phone}`}
            onClick={handlePhoneOpen}
          >
            {open ? phone : i18n.t('common.showPhone')}
          </Text>
        </Box>
      )}
      {fullName && position && (
        <Box fullWidth bottom="s" left="m">
          <Text className={styles.position} left="s" color="info" size="s">
            {textTrimmer(`${fullName}, ${position}`, MAX_TEXT_LENGTH)}
          </Text>
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
