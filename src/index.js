import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";

import { NotificationContainer } from "react-notifications";
import Register from "./components/Register";
import SavedList from "./components/SavedList";

ReactDOM.render(
  <React.StrictMode>
    <App />
      <div className="container my-2">
      <NotificationContainer />
      <SavedList />
      <Register />
      </div>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
