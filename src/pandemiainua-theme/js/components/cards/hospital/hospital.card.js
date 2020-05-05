import React, { memo, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text, Button } from '@pinua/uikit';
import { Card } from '@pinua/common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

import i18n from 'i18n';

import Contacts, { contactsPropTypes } from './contacts';
import Address, { addressPropTypes } from './address';
import Needs, { needsPropTypes } from './needs';

import styles from './hospital.card.scss';

const HospitalCard = ({ name, contacts, address, categories, className, needs, ...props }) => {
  const { city, line1, region, zipCode } = address;

  const renderContacts = useCallback(() => {
    return contacts.map(({ phone, fullName, position, email, id }) => (
      <Contacts key={`contacts-${id}`} id={id} phone={phone} email={email} fullName={fullName} position={position} />
    ));
  }, [contacts]);

  const renderNeeds = useCallback(() => {
    return needs.map(({ name, received, needed, id }, idx) => (
      <Needs key={`need-${id}`} id={id} name={name} received={received} needed={needed} colored={Boolean(idx % 2)} />
    ));
  }, [needs]);

  return (
    <Card className={cn(styles.hospitalCard, className)} direction="column" padding="m" bottom="s">
      <Box className={styles.categories} fullWidth></Box>
      <Box className={styles.main} fullWidth>
        <Box className={styles.info} direction="column">
          <Text bold size="m" color="primary" bottom="m">
            {name}
          </Text>
          <Address city={city} line1={line1} region={region} zipCode={zipCode} bottom="m" />
          {renderContacts()}
        </Box>
        <Box className={styles.needs} direction="column" fullWidth>
          <Box className={styles.list} component="ul" direction="column">
            {renderNeeds()}
          </Box>
          <Box fullWidth justify="end" align="center">
            {needs.length >= 3 && (
              <Button
                className={styles.fullList}
                color="transparent"
                size="s"
                iconRight={<FontAwesomeIcon className={styles.icon} icon={faLongArrowAltRight} />}
              >
                {i18n.t('common.fullList')}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

HospitalCard.defaultProps = {
  address: {},
  categories: [],
  contacts: []
};

HospitalCard.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.array,
  name: PropTypes.string,
  address: PropTypes.shape(addressPropTypes),
  contacts: PropTypes.arrayOf(PropTypes.shape(contactsPropTypes)),
  needs: PropTypes.arrayOf(PropTypes.shape(needsPropTypes))
};

export default memo(HospitalCard);
