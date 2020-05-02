import { connect } from 'react-redux';
import { compose } from 'redux';
import { hospitalsActions, hospitalsSelectors } from 'modules/hospitals';
import { withRouter } from 'react-router-dom';

import Hospitals from './hospitals';

const { loadHospitalRegions, loadHospitalNeedsCategories, loadHospitalTypes, loadHospitals } = hospitalsActions;
const { getDataToArray, getHospitals } = hospitalsSelectors;

const mapStateToProps = state => ({
  hospitals: getHospitals(state),
  regions: getDataToArray(state, 'regions'),
  types: getDataToArray(state, 'types'),
  needs: getDataToArray(state, 'needs')
});

const mapDispatchToProp = {
  loadHospitals,
  loadHospitalRegions,
  loadHospitalNeedsCategories,
  loadHospitalTypes
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Hospitals);
