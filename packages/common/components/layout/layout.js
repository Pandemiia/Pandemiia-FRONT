import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './layout.scss';

const columns = [1, 2, 3];

const Layout = ({ children, className, columns, ...props }) => {
  const renderItems = item => {
    const idx = item + 1;
    return (
      <div
        key={`column-${idx}`}
        className={styles[`column${idx}`]}
        style={{
          width: `${100 / columns}%`
        }}
      >
        {props[`column${idx}`]}
      </div>
    );
  };

  const items = columns ? [...Array(columns).keys()].map(renderItems) : null;

  return (
    <main className={cn(styles.main, className)}>
      <>
        {items}
        {children}
      </>
    </main>
  );
};

Layout.propTypes = {
  columns: PropTypes.oneOf(columns),
  className: PropTypes.string
};

export default Layout;
