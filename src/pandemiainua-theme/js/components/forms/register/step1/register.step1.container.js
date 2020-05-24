import { withFormik } from 'formik';
import * as Yup from 'yup';

import i18n from 'i18n';

import RegisterFormStep1 from './register.step1';

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
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], i18n.t('validation.password.match'))
});

const enhance = withFormik({
  mapPropsToValues: () => ({ email: '', password: '', passwordConfirmation: '' }),
  validateOnChange: false,
  handleSubmit: async (values, { props, setSubmitting }) => {
    const { email, password, passwordConfirmation, onSubmitSuccess } = props;
    onSubmitSuccess({ step: 1, data: { email, password1: password, password2: passwordConfirmation } });
    setSubmitting(false);
  },
  validationSchema: validationSchema
});

export default enhance(RegisterFormStep1);
