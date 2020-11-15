import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './context/AuthContext';
import AppWrapper from './components/Main/Main';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>

      <AppWrapper />
    </AuthProvider>
  );
};

export default App;
