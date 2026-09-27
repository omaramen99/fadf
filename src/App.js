import './App.css';
import Header_comp from './Header_comp/Header_comp';
import Footer_comp from './Footer_comp/Footer_comp';
import Home_comp from './Home_comp/Home_comp';
import Error404_comp from './Error404_comp/Error404_comp';
import Feathers_comp from './Feathers_comp/Feathers_comp';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <Router>
      {/* SVG filter that gives shapes with class "ink" their brushed edge */}
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
          <feGaussianBlur stdDeviation=".35" />
        </filter>
      </svg>

      <div className="site">
        <Header_comp />
        <Switch>
          {/* One page. The old URLs still work: they scroll to a section or open a project. */}
          <Route path={['/', '/about', '/skill', '/projects', '/journey', '/learning', '/contact', '/portfolio/:id']} exact component={Home_comp} />
          <Route component={Error404_comp} />
        </Switch>
        <Footer_comp />
      </div>

      <Feathers_comp />
    </Router>
  );
}

export default App;
