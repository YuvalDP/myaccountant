import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/Login/index';
import PrivateRoutes from './components/PrivateRoutes'
import DashboardContainer from './containers/DashboardContainer';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={LoginForm} />
          <PrivateRoutes exact path="/app/dashboard" component={DashboardContainer} />
          <Route exact path="/About" render=  {() => <div> About us </div>} />
          <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    );
  }
}

export default App;
