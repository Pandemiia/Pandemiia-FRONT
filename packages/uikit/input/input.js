import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './input.scss';

class Input extends PureComponent {
  static propTypes = {
    intent: PropTypes.oneOf(['default', 'danger'])
  };

  static defaultProps = {
    type: 'text',
    intent: 'default'
  };

  render() {
    const { className, intent, ...props } = this.props;

    const classes = classNames(className, styles.input, {
      [styles[intent]]: !!intent
    });

    return <input {...props} className={classes} />;
  }
}

export default Input;
