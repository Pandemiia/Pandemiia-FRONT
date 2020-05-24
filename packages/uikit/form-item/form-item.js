import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field as FormikField } from 'formik';
import classNames from 'classnames';

import Input from '@pinua/uikit/input';
import Text from '@pinua/uikit/text';

import styles from './form-item.scss';

class FormItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    required: PropTypes.bool,
    component: PropTypes.func,
    intent: PropTypes.string,
    message: PropTypes.node,
    error: PropTypes.string,
    fieldProps: PropTypes.object,
    componentProps: PropTypes.object,
    successMessage: PropTypes.node,
    errorMessage: PropTypes.node,
    isSuccess: PropTypes.bool,
    label: PropTypes.node,
    labelIcon: PropTypes.node,
    labelRight: PropTypes.node,
    wrapClassName: PropTypes.string,
    wrapComponent: PropTypes.string
  };

  static defaultProps = {
    component: Input,
    wrapComponent: 'div',
    onBlur() {}
  };

  static contextTypes = {
    formik: PropTypes.object
  };

  render() {
    const {
      intent: defaultIntent,
      label,
      labelIcon,
      labelRight,
      message: defaultMessage,
      successMessage,
      errorMessage,
      isSuccess,
      component: Component,
      fieldProps,
      componentProps,
      wrapClassName,
      wrapComponent: WrapComponent,
      ...props
    } = this.props;

    return (
      <FormikField
        name={props.name}
        {...fieldProps}
        render={({ field, form }) => {
          const { errors = {}, touched = {} } = form;
          const error = errorMessage || (touched[props.name] && errors[props.name]);
          const success = touched[props.name] && !errors[props.name] && (successMessage || isSuccess);
          const intent = error ? 'danger' : success ? 'success' : defaultIntent;
          const message = error || (success && successMessage) || defaultMessage;

          const classes = classNames(styles.formItem, wrapClassName, {
            [styles.disabled]: props.disabled,
            [styles.row]: labelRight,
            [styles[intent]]: !!intent
          });

          return (
            <WrapComponent className={classes} htmlFor={props.id}>
              {label && (
                <Text intent={intent} className={styles.label}>
                  {label}
                  {props.required && ' *'}
                  {labelIcon}
                </Text>
              )}

              <Component
                {...field}
                {...props}
                {...componentProps}
                onBlur={e => {
                  field.onBlur(e);
                  props.onBlur(e);
                }}
                intent={intent}
              />

              {labelRight && (
                <Text size="s" className={styles.labelRight}>
                  {labelRight}
                </Text>
              )}

              {message && (
                <Text className={styles.message} intent={!success || !isSuccess ? intent : undefined} size="s">
                  {message}
                </Text>
              )}
            </WrapComponent>
          );
        }}
      />
    );
  }
}

export default FormItem;
