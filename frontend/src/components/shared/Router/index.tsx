import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import Home from '../../../pages/Home';
import Authors from '../../../pages/Authors';
import Books from '../../../pages/Books';
import AdditionalInformation from '../../../pages/AdditionalInformation';
import PageNotFound from '../../../pages/404';
import Footer from '../Footer';

interface RoutesTypes {
  authors: Object
  books: Object
}

const Routes = ({ authors, books }: RoutesTypes) => {
  const { path, url } = useRouteMatch();
  return (
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
          <AdditionalInformation type={'author'} data={authors} />
        </Route>
        <Route path="/book/:id/:name">
          <AdditionalInformation type={'book'} data={books} />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

const mapStateToProps = (state) => ({
  authors: state.authorsState.authors,
  books: state.booksState.books,
});

export default connect(mapStateToProps)(Routes);

// export default Routes;
