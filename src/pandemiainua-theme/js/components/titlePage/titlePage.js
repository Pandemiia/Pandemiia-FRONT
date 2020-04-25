import React from 'react';
import PropTypes from 'prop-types';
import styles from './titlePage.scss';

function TitlePage({ title, counter, counterLabel }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.titleCounter}>
        {counter} {counterLabel}
      </p>
    </div>
  );
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  counter: PropTypes.string,
  counterLabel: PropTypes.string
};

export default TitlePage;
