import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/contact" component={ContactPage} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;