'use strict';

import {connect} from 'react-redux';
import Overlay   from '../../components/overlay';

const mapStateToProps = function(state) {
  return {
    isVisible: state.overlay.showOverlay,
    skillName: state.overlay.skillName,
    text: state.overlay.text,
    skillStep: state.overlay.skillStep,
    skillCategory: state.overlay.skillCategory
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    close: function() {
      dispatch({type: 'SHOW_OVERLAY', showOverlay: false});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
