import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/DashboardComponent';
import './App.css';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Dashboard />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
