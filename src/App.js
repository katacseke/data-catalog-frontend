import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './context/AuthContext';
import AppWrapper from './components/Main/Main';

const App = () => {
  const [searchResults, setSearchResults] = useState([1, 2, 3]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AuthProvider>
      <Router>
        <Navbar setIsLoading={setIsLoading} searchResults={searchResults} setSearchResults={setSearchResults} />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>

      <AppWrapper isLoading={isLoading} searchResults={searchResults} />
    </AuthProvider>
  );
};

export default App;
