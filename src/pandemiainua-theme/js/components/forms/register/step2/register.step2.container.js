import { withFormik } from 'formik';
import * as Yup from 'yup';

import i18n from 'i18n';

import RegisterFormStep2 from './register.step2';

const validationSchema = Yup.object().shape({
  lastname: Yup.string()
    .email(i18n.t('validation.email.invalid'))
    .required(i18n.t('validation.email.required')),
  name: Yup.string()
    .min(
      3,
      i18n.t('validation.name.minLength', {
        min: 3
      })
    )
    .required(i18n.t('validation.password.required'))
});

const enhance = withFormik({
  mapPropsToValues: () => ({ name: '', lastName: '', phone: '', city: '', clinic: '' }),
  validateOnChange: false,
  handleSubmit: async (values, { props, setSubmitting }) => {
    const { name, lastName, phone, city, clinic, onSubmitSuccess } = props;
    onSubmitSuccess({ step: 1, data: { name, lastName, phone, city, clinic } });
    setSubmitting(false);
  },
  validationSchema: validationSchema
});

export default enhance(RegisterFormStep2);
