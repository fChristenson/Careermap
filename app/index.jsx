'use strict';

import {Provider}    from 'react-redux';
import reducers      from './reducers';
import {createStore} from 'redux';
import React         from 'react';
import ReactDOM      from 'react-dom';
import Careermap     from './containers/careermap';

let store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
      <Careermap />
    </Provider>
    ,document.getElementById('app'));

