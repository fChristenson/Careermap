'use strict';

let initialState = {
  showOverlay: false,
  skillCategory: 'TestType',
  skillName: 'TestName',
  skillStep: 'TestTitle',
  text: 'TestText'
};

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SHOW_OVERLAY':
      let nextState = {
        showOverlay: action.showOverlay,
        skillCategory: action.skillCategory,
        skillName: action.skillName,
        skillStep: action.skillStep,
        text: action.text
      };
      return Object.assign({}, state, nextState);
    default:
      return state;
  }
}

