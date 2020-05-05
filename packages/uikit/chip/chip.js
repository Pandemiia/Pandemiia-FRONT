import React from 'react';
import Box from '@pinua/uikit/box';
import Text from '@pinua/uikit/text';
import styles from './chip.scss';

const Chip = () => {
  return (
    <Box className={styles.ChipOutlined}>
      <Text className={styles.ChipLabel}>Лікарні першої хвилі</Text>
    </Box>
  );
};

Chip.propTypes = {};

export default Chip;
