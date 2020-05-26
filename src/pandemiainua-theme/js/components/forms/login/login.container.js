import { connect } from 'react-redux';
import { withFormik } from 'formik';
import compose from 'recompose/compose';
import * as Yup from 'yup';
import { authActions } from 'modules/auth';

import i18n from 'i18n';

import LoginForm from './login';

const { logIn } = authActions;

const mapDispatchToProps = {
  logIn
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
    .required(i18n.t('validation.password.required'))
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '', remember: true }),
    validateOnChange: false,
    handleSubmit: async (values, { props, setSubmitting }) => {
      let isError = false;
      const { logIn, onSubmitSuccess } = props;
      const { email, password } = values;
      try {
        await logIn({ email, password });
      } catch (error) {
        isError = true;
      }

      if (!isError) {
        onSubmitSuccess();
      }
      setSubmitting(false);
    },
    validationSchema: validationSchema
  })
);

export default enhance(LoginForm);
