import { connect } from 'react-redux';
import { compose } from 'redux';
import { appActions, appSelectors } from 'modules/app';
import { solutionsActions, solutionsSelectors } from 'modules/solutions';
import { withRouter } from 'react-router-dom';

import Solutions from './solutions';

const { toggleFilter } = appActions;
const { getFilterStatus } = appSelectors;

const { loadSolutionsTools, loadSolutionsCategories, loadSolutionsMaterials } = solutionsActions;
const { getDataToArray } = solutionsSelectors;

const mapStateToProps = state => ({
  filterOpen: getFilterStatus(state),
  tools: getDataToArray(state, 'tools'),
  categories: getDataToArray(state, 'categories'),
  materials: getDataToArray(state, 'materials')
});

const mapDispatchToProp = {
  toggleFilter,
  loadSolutionsTools,
  loadSolutionsCategories,
  loadSolutionsMaterials
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Solutions);
