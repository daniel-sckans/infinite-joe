import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Home

    <BrowserRouter>
      <Route>
        <Route path="/infinite-site/account" element={<div> > Account</div>} />
      </Route>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
