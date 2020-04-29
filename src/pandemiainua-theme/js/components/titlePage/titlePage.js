import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';
import styles from './titlePage.scss';

const TitlePage = ({ title, counter }) => {
  return (
    <Box className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.titleCounter}>{counter} закладів</p>
    </Box>
  );
};

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.string
};

export default TitlePage;
