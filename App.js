import React, { Component } from 'react';
import Homepage from './app/components/routes/Navi';

import { Provider } from 'react-redux';
import store from './app/Publics/Redux/Store';


export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Homepage/>
      </Provider>
    );
  }
}

