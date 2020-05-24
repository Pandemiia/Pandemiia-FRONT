import { connect } from 'react-redux';
import { compose } from 'redux';
import { authActions } from 'modules/auth';
import { withRouter } from 'react-router-dom';

import Register from './register';

const { register } = authActions;

const mapDispatchToProp = {
  register
};

const enhance = compose(withRouter, connect(null, mapDispatchToProp));

export default enhance(Register);
