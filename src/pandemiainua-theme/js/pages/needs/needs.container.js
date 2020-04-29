import { connect } from 'react-redux';
import { compose } from 'redux';
import { appActions, appSelectors } from 'modules/app';
import { withRouter } from 'react-router-dom';

import Needs from './needs';

const { loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes } = appActions;
const { getHospitalRegions } = appSelectors;

const mapStateToProps = state => ({
  regions: getHospitalRegions(state)
});

const mapDispatchToProp = {
  loadHospitalRegions,
  loadHospitalNeedsCategories,
  loadHospitalTypes
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Needs);
