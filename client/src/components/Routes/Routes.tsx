import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { PrivateRoute } from '../ProtectedRoute/index';
import { MyAccount } from '../../pages/MyAccount';

interface StateValues {
  users: any;
}

function Routes({ loggedIn }: any) {
  return (
    <Switch>
      <Route path={ROUTES_PATH.HOME} component={Home} exact />
      <Route path={ROUTES_PATH.AUTHORS} component={Authors} exact />
      <Route path={ROUTES_PATH.BOOKS} component={Books} />
      <Route path={ROUTES_PATH.AUTHORS_ADDITIONAL} component={() => <AdditionalInformation type="author" />} />
      <Route path={ROUTES_PATH.BOOKS_ADDITIONAL} component={() => <AdditionalInformation type="book" />} />
      <Route path={ROUTES_PATH.LOGIN} component={Login} />
      {!loggedIn
      && (
      <Route path={ROUTES_PATH.REGISTER} component={Register} />
      )}
      {loggedIn
      && (
      <PrivateRoute path={ROUTES_PATH.CREATE_AUTHOR} component={CreateAuthor} />
      )}
      {loggedIn
      && (
      <PrivateRoute path={ROUTES_PATH.CREATE_BOOK} component={CreateBook} />
      )}
      {loggedIn
      && (
        <PrivateRoute path={ROUTES_PATH.MY_ACCOUNT} component={MyAccount} />
      )}
      <Route path={ROUTES_PATH.NOT_FOUND} component={Home}>
        <PageNotFound />
      </Route>
    </Switch>
  );
}

const mapStateToProps = (state: StateValues) => ({
  loggedIn: state.users.loggedIn,
});

export default connect(mapStateToProps)(Routes);
