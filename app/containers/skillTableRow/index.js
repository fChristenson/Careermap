'use strict';

import {connect}     from 'react-redux';
import SkillTableRow from '../../components/skillTableRow';

const mapStateToProps = function(state) {
  return state;
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillTableRow);
