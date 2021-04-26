import React from 'react'
import './App.css';
import { db } from './firebase'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
