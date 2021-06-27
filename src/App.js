import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Homepage/Home';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/Sign Up/SignUp';



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/React-Website' exact component={Home}/>
        <Route path='/React-Website/services' component={Services} />
        <Route path='/React-Website/products' component={Products} />
        <Route path='/React-Website/sign-up' component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
