import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './address.scss';

const Address = ({ city, line1, region, zipCode, className, ...props }) => {
  const fullAddress = `${city}, ${line1}, ${region} ${zipCode}`;

  return (
    <Box className={cn(styles.address, className)} fullWidth {...props}>
      <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
      <Text color="info" size="s">
        {fullAddress}
      </Text>
    </Box>
  );
};

export const addressPropTypes = {
  className: PropTypes.string,
  city: PropTypes.string,
  line1: PropTypes.string,
  region: PropTypes.string,
  zipCode: PropTypes.string
};

Address.propTypes = addressPropTypes;

export default memo(Address);
