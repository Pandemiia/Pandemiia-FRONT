import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { authSelectors } from 'modules/auth';
import Login from './login';

const { isLoggedIn } = authSelectors;

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state)
});

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Login);
