import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./modules/dataController/store.js"
import db from './modules/db';
import DataSyncController from "./modules/dataController/DataSyncController"
import TaskOrderController from "./modules/dataController/TaskOrderController"
const COLLECTION_NAME = "todoiz.io"
const DEFAULT_DOC_ID = "default"
const collectionRef = db.collection(COLLECTION_NAME)
const tasks = collectionRef.doc(DEFAULT_DOC_ID).collection("tasks")
const sortFilters = collectionRef.doc(DEFAULT_DOC_ID)



async function update() {
    await TaskOrderController.addSortField("name",true)
    await TaskOrderController.addSortField("priority",true)
    await TaskOrderController.addSortField("time",true)
    await TaskOrderController.changeSortFieldOrder("time",0)
    await TaskOrderController.addSortField("name",true)

}


update()


DataSyncController.setSubscription(tasks)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

