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
import { ROUTES_PATH } from '../../const';

function Routes() {
  return (
    <Switch>
      <Route path={ROUTES_PATH.HOME} exact>
        <Home />
      </Route>
      <Route path={ROUTES_PATH.AUTHORS} exact>
        <Authors />
      </Route>
      <Route path={ROUTES_PATH.BOOKS}>
        <Books />
      </Route>
      <Route path={ROUTES_PATH.AUTHORS_ADDITIONAL}>
        <AdditionalInformation type="author" />
      </Route>
      <Route path={ROUTES_PATH.BOOKS_ADDITIONAL}>
        <AdditionalInformation type="book" />
      </Route>
      <Route path={ROUTES_PATH.REGISTER}>
        <Register />
      </Route>
      <Route path={ROUTES_PATH.LOGIN}>
        <Login />
      </Route>
      <Route path={ROUTES_PATH.CREATE_AUTHOR}>
        <CreateAuthor />
      </Route>
      <Route path={ROUTES_PATH.CREATE_BOOK}>
        <CreateBook />
      </Route>
      <Route path={ROUTES_PATH.NOT_FOUND}>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
