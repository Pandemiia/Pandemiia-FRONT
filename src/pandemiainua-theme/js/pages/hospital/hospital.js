import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Layout } from '@pinua/common/components';
import { Box, Text } from '@pinua/uikit';

import styles from './hospital.scss';

const Hospital = ({ id, data, loadHospital, ...props }) => {
  const { name } = data;

  useEffect(() => {
    loadHospital(id);
  }, [id, loadHospital]);

  return (
    <Layout className={styles.page}>
      <Box direction="column" fullWidth>
        <Box top="l" bottom="l">
          <Text size="xl">{name}</Text>
        </Box>
        <Box direction="column" fullWidth>
          <Box fullWidth>
            <Text size="m">
              Детальна <b>сторінка закладу</b> знаходиться на стадіії розробки...
            </Text>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

Hospital.propTypes = {
  id: PropTypes.string,
  data: PropTypes.shape({
    className: PropTypes.string,
    categories: PropTypes.array,
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      line1: PropTypes.string,
      region: PropTypes.string,
      zipCode: PropTypes.string
    }),
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        email: PropTypes.string,
        position: PropTypes.string,
        fullName: PropTypes.string
      })
    ),
    needs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        needed: PropTypes.number,
        colored: PropTypes.bool,
        received: PropTypes.number
      })
    )
  }),
  loadHospital: PropTypes.func
};

export default memo(Hospital);
