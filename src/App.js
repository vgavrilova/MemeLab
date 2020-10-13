import React from 'react';
import NavBar from './hoc/NavBar/NavBar';
import MemeGen from './containers/MemeGen/MemeGen';
import Generated from './components/Generated/Generated';
import About from './containers/About/About';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

const App = () => {
  

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar>
          <Switch>
            <Route path="/create_meme" component={MemeGen}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/generated_meme" component={Generated}></Route>
            <Redirect to="/about"></Redirect>
          </Switch>
          
        </NavBar>

      </div>
      </BrowserRouter>  
  );
}

export default App;
