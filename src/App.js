import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/Login';

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/About" render=  {() => <div> About us </div>} />
          <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    );
  }
}

export default App;
