import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { authActions } from 'modules/auth';

import i18n from 'i18n';

import RegisterFormStep1 from './register.step1';

const { register } = authActions;

const mapDispatchToProp = {
  register
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validation.email.invalid'))
    .required(i18n.t('validation.email.required')),
  password: Yup.string()
    .min(
      6,
      i18n.t('validation.password.minLength', {
        min: 6
      })
    )
    .required(i18n.t('validation.password.required')),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], i18n.t('validation.password.match')),
  agreement: Yup.boolean().oneOf([true], i18n.t('validation.password.agreement'))
});

const enhance = compose(
  connect(null, mapDispatchToProp),
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '', passwordConfirmation: '', agreement: false }),
    validateOnChange: false,
    handleSubmit: async (values, { props, setSubmitting }) => {
      let isError = false;

      const { onSubmitSuccess, register } = props;
      const { email, password, passwordConfirmation } = values;

      try {
        register({ email, password1: password, password2: passwordConfirmation });
      } catch (err) {
        isError = true;
        console.log('error', err);
      }
      if (!isError) {
        onSubmitSuccess({ step: 1 });
      }

      setSubmitting(false);
    },
    validationSchema: validationSchema
  })
);

export default enhance(RegisterFormStep1);
