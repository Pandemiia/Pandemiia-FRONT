import React, { memo, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, Text, Button, Chip } from '@pinua/uikit';
import { Card } from '@pinua/common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import i18n from 'i18n';

import Contacts, { contactsPropTypes } from './contacts';
import Address, { addressPropTypes } from './address';
import Needs, { needsPropTypes } from './needs';

import styles from './hospital.card.scss';

const HospitalCard = ({ id, name, contacts, address, categories, className, needs, ...props }) => {
  const { city, line1, region, zipCode } = address;

  const renderCategories = useCallback(() => {
    return categories.map(({ name, id }) => (
      <Chip key={`category-${id}`} id={id} right="s" className={styles.chip}>
        {name}
      </Chip>
    ));
  }, [categories]);

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
      <Box className={styles.categories} fullWidth bottom="m" wrap>
        {renderCategories()}
      </Box>
      <Box className={styles.main} fullWidth wrap>
        <Box className={styles.info} direction="column">
          <Text
            className={styles.title}
            component={Link}
            bold
            size="m"
            color="primary"
            bottom="m"
            to={`/hospitals/${id}/`}
          >
            {name}
          </Text>
          <Address city={city} line1={line1} region={region} zipCode={zipCode} bottom="m" />
          {renderContacts()}
        </Box>
        <Box className={styles.needs} fullWidth>
          <Box className={styles.list} component="ul" direction="column" fullWidth>
            {renderNeeds()}
          </Box>
        </Box>
        <Box fullWidth justify="end" align="center">
          {needs.length >= 3 && (
            <Button
              component={Link}
              className={styles.fullList}
              color="transparent"
              size="s"
              iconRight={<FontAwesomeIcon className={styles.icon} icon={faLongArrowAltRight} />}
              to={`/hospitals/${id}/`}
            >
              {i18n.t('common.fullList')}
            </Button>
          )}
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
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.shape(addressPropTypes),
  contacts: PropTypes.arrayOf(PropTypes.shape(contactsPropTypes)),
  needs: PropTypes.arrayOf(PropTypes.shape(needsPropTypes))
};

export default memo(HospitalCard);
