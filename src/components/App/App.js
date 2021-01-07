import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';

import AssetsPage from '../AssetsPage';
import AssetDetailsPage from '../AssetDetailsPage';

import { SearchInfo } from '../AssetsPage/AssetsPageElements';
import Page from '../Page';

const App = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          {/* TODO: refactor page to separate component */}
          <Page>
            <SearchInfo>Search for data to see results!</SearchInfo>
          </Page>
        </Route>

        <Route path="/assets/search/:searchTerm?">
          <AssetsPage />
        </Route>

        <Route path="/assets/:id">
          <AssetDetailsPage />
        </Route>
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;