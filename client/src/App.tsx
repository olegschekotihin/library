import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  BrowserRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes/index';
import { autoLogin } from './store/actions/userActions';

interface AppValues {
  autoLogin: () => void;
}

function App({ autoLogin }: AppValues) {
  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <BrowserRouter>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => ({
  autoLogin: (localToken) => dispatch(autoLogin(localToken)),
});

export default connect(null, mapDispatchToProps)(App);

// export default App;
