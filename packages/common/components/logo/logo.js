import React, { memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import MainLogo from './img/logo.svg';

import styles from './logo.scss';

const Logo = ({ size, onClick, ...props }) => {
  return <img onClick={onClick} className={cn(styles.logo, styles[size])} src={MainLogo} alt="Logo" {...props} />;
};

Logo.defaultProps = {
  size: 'm'
};

Logo.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l']),
  onClick: PropTypes.func
};

export default memo(Logo);
