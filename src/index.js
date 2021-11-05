import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./modules/dataController/store.js"
import TaskOrderController from "./modules/dataController/TaskOrderController"
import initSubscription from "./modules/setup/initSubscriptions"
async function update() {
    await TaskOrderController.addSortField("name",true)
    await TaskOrderController.removeSortField("priority")
    await TaskOrderController.removeSortField("time")

}

update()
initSubscription()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

