import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import {icons} from './assets/icons'

import {Provider} from 'react-redux'
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

React.icons = icons

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App/>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
