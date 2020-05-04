import { connect } from 'react-redux';
import { compose } from 'redux';
import { solutionsActions, solutionsSelectors } from 'modules/solutions';
import { withRouter } from 'react-router-dom';

import Solutions from './solutions';

const { loadSolutionsTools, loadSolutionsCategories, loadSolutionsMaterials } = solutionsActions;
const { getDataToArray } = solutionsSelectors;

const mapStateToProps = state => ({
  tools: getDataToArray(state, 'tools'),
  categories: getDataToArray(state, 'categories'),
  materials: getDataToArray(state, 'materials')
});

const mapDispatchToProp = {
  loadSolutionsTools,
  loadSolutionsCategories,
  loadSolutionsMaterials
};

const enhance = compose(withRouter, connect(mapStateToProps, mapDispatchToProp));

export default enhance(Solutions);
