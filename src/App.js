import React from 'react';
import NavBar from './hoc/NavBar/NavBar';
import MemeGen from './containers/MemeGen/MemeGen';
import Generated from './components/Generated/Generated';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar>
          <Switch>
            <Route path="/create_meme" component={MemeGen}></Route>
            <Route path="/about" component={MemeGen}></Route>
            <Route path="/generated_meme" component={Generated}></Route>
            <Route render={() => <h1>Page not found</h1>}></Route>
          </Switch>
          
        </NavBar>

      </div>
      </BrowserRouter>  
  );
}

export default App;
