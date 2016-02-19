'use strict';

let initialState = {
  showOverlay: false,
  header: 'Header',
  text: 'Text'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_OVERLAY':
      let nextState = {
        showOverlay: action.showOverlay,
        header: action.header,
        text: action.text
      };
      return Object.assign({}, state, nextState);
    default:
      return state;
  }
}

