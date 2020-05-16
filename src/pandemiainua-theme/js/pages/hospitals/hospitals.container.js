import { connect } from 'react-redux';
import { compose } from 'redux';
import { hospitalsActions, hospitalsSelectors } from 'modules/hospitals';
import { appActions, appSelectors } from 'modules/app';
import { withRouter } from 'react-router-dom';

import Hospitals from './hospitals';

const { toggleFilter } = appActions;
const { getFilterStatus } = appSelectors;

const { loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes, loadHospitals } = hospitalsActions;
const { getDataToArray, getHospitals } = hospitalsSelectors;

const mapStateToProps = state => ({
  filterOpen: getFilterStatus(state),
  hospitals: getHospitals(state),
  regions: getDataToArray(state, 'regions'),
  types: getDataToArray(state, 'types'),
  needs: getDataToArray(state, 'needs')
});

const mapDispatchToProp = {
  toggleFilter,
  loadHospitals,
  loadHospitalRegions,
  loadHospitalNeedsCategories,
  loadHospitalTypes
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Hospitals);
