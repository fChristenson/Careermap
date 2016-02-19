'use strict';

import {connect}     from 'react-redux';
import SkillTableRow from '../../components/skillTableRow';

const mapStateToProps = function(state) {
  return state;
};

const mapDispatchToProps = function(dispatch) {
  return {
    showOverlay: function(category, skill, step, text) {
      return function() {
        dispatch({
          type: 'SHOW_OVERLAY',
          skillCategory: category,
          skillName: skill,
          skillStep: step,
          text: text,
          showOverlay: true});
      };
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillTableRow);
