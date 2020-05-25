import { connect } from 'react-redux';
import { withFormik } from 'formik';
import compose from 'recompose/compose';
import * as Yup from 'yup';
import { authActions } from 'modules/auth';

import i18n from 'i18n';

import ResetForm from './reset';

const { resetPassword } = authActions;

const mapDispatchToProps = {
  resetPassword
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email(i18n.t('validation.email.invalid'))
    .required(i18n.t('validation.email.required'))
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withFormik({
    mapPropsToValues: () => ({ email: '' }),
    validateOnChange: false,
    handleSubmit: async (values, { props, setSubmitting }) => {
      let isError = false;
      const { resetPassword, onSubmitSuccess } = props;
      const { email } = values;
      try {
        await resetPassword({ email });
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

export default enhance(ResetForm);
