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

const mapDispatchToProps = function(dispatch) {
  return {
    showOverlay: function(header, text) {
      return function() {
        dispatch({
          type: 'SHOW_OVERLAY',
          header: header,
          text: text,
          showOverlay: true});
      };
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Careermap);
