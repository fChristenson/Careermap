'use strict';

import {connect} from 'react-redux';
import Careermap from '../../components/careermap';

const mapStateToProps = function(state) {
  return {
    name: state.careermap.name,
    steps: state.careermap.steps,
    categories: state.careermap.skillCategories
  };
};

export default connect(mapStateToProps)(Careermap);
