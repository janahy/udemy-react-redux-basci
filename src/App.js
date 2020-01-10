import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Counter from './containers/Counter/Counter';
import Posts from './containers/Posts/Posts';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header>
          <nav>
              <ol
                style={{
                  listStyle: 'none'
                }}>
                <NavLink to="/"><li>Counter</li></NavLink>
                <NavLink to="/posts"><li>Posts</li></NavLink>
              </ol>
          </nav>
        </header>
        <Switch>
          <Route 
            path="/posts"
            exact
            component={Posts} />
          <Route 
            path="/" 
            exact
            component={Counter} />
        </Switch> 
      </div>
    );
  }
}

export default App;
