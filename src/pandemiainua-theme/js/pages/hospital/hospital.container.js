import { connect } from 'react-redux';
import { compose } from 'redux';
import { hospitalsActions, hospitalsSelectors } from 'modules/hospitals';
import { withRouter } from 'react-router-dom';

import Hospital from './hospital';

const { loadHospital } = hospitalsActions;
const { getHospital } = hospitalsSelectors;

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  id,
  data: getHospital(state)
});

const mapDispatchToProp = {
  loadHospital
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Hospital);
