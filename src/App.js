import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/" render={() => <div> Root Route </div>} />
          <Route exact path="/login" render={() => <div> login Route </div>} />
          <Route render={() => <div>404 Not Found</div>} />
      </Switch>
    );
  }
}

export default App;
