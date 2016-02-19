'use strict';

import {connect} from 'react-redux';
import Overlay   from '../../components/overlay';

const mapStateToProps = function(state) {
  return {
    isVisible: state.overlay.showOverlay,
    header: state.overlay.header,
    text: state.overlay.text
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
