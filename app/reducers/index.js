'use strict';

import {combineReducers} from 'redux';
import careermap         from './careermap';
import overlay           from './overlay';

export default combineReducers({overlay, careermap});

