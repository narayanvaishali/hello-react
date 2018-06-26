import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
    	    <AppRoutes />
    	</BrowserRouter>
    );
  }
}

export default App;
