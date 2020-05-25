import { connect } from 'react-redux';
import { compose } from 'redux';
import { authSelectors } from 'modules/auth';
import { withRouter } from 'react-router-dom';

import Pages from './pages';

const { isLoggedIn } = authSelectors;

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state)
});

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(Pages);
