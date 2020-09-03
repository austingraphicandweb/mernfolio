import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/home';

function App() {
  return (
    <Router >
      <Navigation />
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;
