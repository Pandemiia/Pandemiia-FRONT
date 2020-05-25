import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '@pinua/uikit';
import { Layout } from '@pinua/common/components';
import { Step1, Step2 } from 'components/forms/register';

import i18n from 'i18n';

import styles from './register.scss';

const steps = [Step1, Step2];

const Register = ({ activeStep, setActiveStep, ...props }) => {
  const [step, setStep] = useState(activeStep);

  const handleSubmitSuccess = useCallback(
    ({ step }) => {
      setStep(step);
      setActiveStep(step);
    },
    [setActiveStep]
  );

  const renderStep = useCallback(() => {
    const Step = steps[step];

    return <Step onSubmitSuccess={handleSubmitSuccess} />;
  }, [handleSubmitSuccess, step]);

  return (
    <Layout className={styles.page}>
      <Box className={styles.register} justify="center" align="center" direction="column" fullWidth>
        <Box className={styles.title} justify="center" align="center" direction="column" bottom="l">
          <Text component="h3" size="xl">
            {i18n.t(`register.step${step}.title`)}
          </Text>
          <Text top="m" size="s" color="info" align="center">
            {i18n.t(`register.step${step}.text`)}
          </Text>
        </Box>
        {renderStep()}
      </Box>
    </Layout>
  );
};

Register.propTypes = {
  activeStep: PropTypes.number,
  setActiveStep: PropTypes.func
};

export default Register;
