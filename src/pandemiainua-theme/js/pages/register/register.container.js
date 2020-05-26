import { connect } from 'react-redux';
import { compose } from 'redux';
import { authActions, authSelectors } from 'modules/auth';
import { withRouter } from 'react-router-dom';

import Register from './register';

const { setActiveStep } = authActions;
const { getStep, isLoggedIn } = authSelectors;

const mapStateToProps = state => ({
  activeStep: getStep(state),
  isLoggedIn: isLoggedIn(state)
});

const mapDispatchToProp = {
  setActiveStep
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Register);
