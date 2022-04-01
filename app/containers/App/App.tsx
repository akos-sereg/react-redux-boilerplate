import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import AboutPage from 'containers/AboutPage/Loadable';
import AuthorsPage from 'containers/AuthorsPage/index';
import ManageAuthorPage from 'containers/ManageAuthorPage/index';
import MainPage from 'containers/MainPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div>
    <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="React.js Boilerplate">
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />

    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/app" component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/author/:id" component={ManageAuthorPage} />
        <Route path="/author" component={ManageAuthorPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>

    <Footer />
  </div>
);

export default App;