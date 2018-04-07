import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';

//import classes from './App.css';
import SearchResults from './containers/SearchResults/SearchResults';
import Program from './containers/Program/Program';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/search-result" exact component={SearchResults} />
            <Route path="/program" exact component={Program} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
