import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'mobx-react';
import SongStore from 'src/stores/SongStore';
import UserStore from 'src/stores/UserStore';

const songStore = new SongStore();
const userStore = new UserStore(songStore);

import './index.css';

ReactDOM.render(
  <Provider songStore={songStore} userStore={userStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
