import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchBar from './pages/SearchBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
