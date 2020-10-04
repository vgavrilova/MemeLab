import React from 'react';
import NavBar from './hoc/NavBar/NavBar';
import MemeGen from './containers/MemeGen/MemeGen';

import './App.css';

const App = () => {
  

  return (
    <div className="App">
      <NavBar>
        <MemeGen />
      </NavBar>

    </div>
  );
}

export default App;
