
import './App.css';
import Header_comp from './Header_comp/Header_comp';
import Footer_comp from './Footer_comp/Footer_comp';
import Home_comp from './Home_comp/Home_comp';
import Skills_Page_comp from './Skills_Page_comp/Skills_Page_comp';
import Project2_Page_comp from './Project2_Page_comp/Project2_Page_comp';
import About_Page_comp from './About_Page_comp/About_Page_comp';
import Projects_Page_comp from './Projects_Page_comp/Projects_Page_comp';
import Error404_comp from './Error404_comp/Error404_comp';

import {BrowserRouter as Router , Route, Switch, Link, withRouter} from 'react-router-dom';
import history from './history';
import React from 'react';

function App() {
  
  return (
  
    <>
    <Router history={history}>

      <Header_comp />
        <Switch>
          <Route path='/' exact  component={Home_comp}  />
          <Route path='/skill' exact component={Skills_Page_comp} />
          {/* <Route path='/project/:id' exact component={Project_Page_comp} /> */}
          <Route path='/portfolio/:id' exact component={Project2_Page_comp} />
          <Route path='/about' exact component={About_Page_comp} />
          <Route path='/projects' exact component={Projects_Page_comp} />
          <Route path=''   component={Error404_comp}  />
        </Switch>
      <Footer_comp />
    </Router>
    </>
  );
}

export default App;
