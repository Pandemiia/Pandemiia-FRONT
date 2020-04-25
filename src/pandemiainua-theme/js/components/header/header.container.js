import { connect } from 'react-redux';
import { compose } from 'redux';
import { appActions, appSelectors } from 'modules/app';
import { withRouter } from 'react-router-dom';

import Header from './header';

const { toggleMenu } = appActions;
const { getMenuStatus } = appSelectors;

const mapStateToProps = state => ({
  isMenuOpen: getMenuStatus(state)
});

const mapDispatchToProp = {
  toggleMenu
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Header);
