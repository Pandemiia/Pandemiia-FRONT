import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Checkbox from './checkbox';
import Text from '../text';

import styles from './checkbox-group.scss';

export const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

class CheckboxGroup extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.array,
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    radio: PropTypes.bool,
    size: PropTypes.oneOf(sizes),
    options: PropTypes.arrayOf(PropTypes.object)
  };

  handleChange = optionValue => event => {
    const { name, onChange, radio, value } = this.props;
    let groupValues = [...(value || [])];
    const index = groupValues.findIndex(v => v === optionValue);

    if (index === -1) {
      groupValues.push(optionValue);
    } else {
      groupValues.splice(index, 1);
    }

    if (radio) {
      groupValues = [optionValue];
    }

    onChange({ target: { name, value: groupValues } });
  };

  onBlur = () => {
    const { name, onBlur } = this.props;

    onBlur({ target: { name } });
  };

  onFocus = () => {
    const { name, onFocus } = this.props;

    onFocus({ target: { name } });
  };

  render() {
    const { disabled, options, value, inline, radio, size } = this.props;
    const wrapperClasses = classNames(styles.checkboxGroup, inline && styles.inline, disabled && styles.disabled);

    return (
      <div className={wrapperClasses}>
        {options.map(({ label, children, ...option }) => (
          <label key={option.value} className={styles.checkboxWrapper}>
            <Checkbox
              {...option}
              radio={radio}
              disabled={disabled || option.disabled}
              value={(value || []).includes(option.value)}
              onChange={this.handleChange(option.value)}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
            {label && (
              <Text size={size} color="primary" className={styles.label}>
                {label}
              </Text>
            )}
            {children}
          </label>
        ))}
      </div>
    );
  }
}

CheckboxGroup.defaultProps = {
  value: [],
  onFocus() {},
  onBlur() {},
  inline: true,
  size: 's'
};

export default CheckboxGroup;
