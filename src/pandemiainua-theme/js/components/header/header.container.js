import { connect } from 'react-redux';
import { compose } from 'redux';
import { appActions, appSelectors } from 'modules/app';
import { authSelectors } from 'modules/auth';
import { withRouter } from 'react-router-dom';

import Header from './header';

const { toggleMenu } = appActions;
const { getMenuStatus } = appSelectors;
const { isLoggedIn } = authSelectors;

const mapStateToProps = state => ({
  isMenuOpen: getMenuStatus(state),
  isLoggedIn: isLoggedIn(state)
});

const mapDispatchToProp = {
  toggleMenu
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Header);
