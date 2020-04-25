import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import MainLogo from './img/logo.svg';

import styles from './logo.scss';

const Logo = ({ size, ...props }) => {
  return <img className={cn(styles.logo, styles[size])} src={MainLogo} alt="Logo" {...props} />;
};

Logo.defaultProps = {
  size: 'm'
};

Logo.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l'])
};

export default memo(Logo);
