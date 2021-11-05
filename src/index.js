import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./modules/dataController/store.js"
import initSubscription from "./modules/setup/initSubscriptions"
import TaskDataController from "./modules/dataController/TaskDataController";

async function update() {
   await TaskDataController.deleteAllCompleted()
}

initSubscription()
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

