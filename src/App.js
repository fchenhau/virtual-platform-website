import React from 'react';
import { Provider } from "react-redux";
import { Router } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./app/routes";
import history from "./app/routes/history";
import reduxStore from './app/lib/redux/reduxStore';

function App() {
  return (
    <Provider store={reduxStore}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
