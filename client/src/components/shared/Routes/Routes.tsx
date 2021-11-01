import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from '../Header';
import { Home } from '../../../pages/Home';
import { Authors } from '../../../pages/Authors';
import { Books } from '../../../pages/Books';
import { AdditionalInformation } from '../../../pages/AdditionalInformation';
import { PageNotFound } from '../../../pages/PageNotFound';
import { Footer } from '../Footer';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/authors" exact>
        <Authors />
      </Route>
      <Route path="/books">
        <Books />
      </Route>
      <Route path="/author/:id/:name">
        <AdditionalInformation type="author" />
      </Route>
      <Route path="/book/:id/:name">
        <AdditionalInformation type="book" />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
