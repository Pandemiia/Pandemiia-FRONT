import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Input from '@pinua/uikit/input';

import styles from './password-input.scss';

class PasswordInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { type: 'password' };
  }

  handleIconClick = () => this.setState(this.toggleInputType);

  toggleInputType(prevState) {
    const type = prevState.type === 'password' ? 'text' : 'password';

    return { type };
  }

  render() {
    const { type } = this.state;
    const { ...props } = this.props;

    const iconClasses = classNames(styles.passwordIcon, {
      [`${styles.active}`]: type !== 'password'
    });

    return (
      <div className={styles.wrapper}>
        <Input {...props} className={styles.password} type={type} />
        <span className={iconClasses} onClick={this.handleIconClick} />
      </div>
    );
  }
}

export default PasswordInput;
