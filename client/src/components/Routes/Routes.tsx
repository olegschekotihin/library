import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Authors } from '../../pages/Authors';
import { Books } from '../../pages/Books';
import { AdditionalInformation } from '../../pages/AdditionalInformation';
import { Register } from '../../pages/Register';
import { Login } from '../../pages/Login';
import { CreateAuthor } from '../../pages/CreateAuthor';
import { CreateBook } from '../../pages/CreateBook';
import { PageNotFound } from '../../pages/PageNotFound';

function Routes() {
  return (
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
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/add-author">
        <CreateAuthor />
      </Route>
      <Route path="/add-book">
        <CreateBook />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
