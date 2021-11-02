import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from "./modules/dataController/store.js"
import db from './modules/db';
import DataSyncController from "./modules/dataController/DataSyncController"
const COLLECTION_NAME = "todoiz.io"
const DEFAULT_DOC_ID = "default"
const collectionRef = db.collection(COLLECTION_NAME)
const query = collectionRef.doc(DEFAULT_DOC_ID).collection("tasks")

DataSyncController.setSubscription(query)
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

