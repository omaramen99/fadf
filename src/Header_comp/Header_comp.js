import './Header_comp.css';
import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Art, crowLogo } from '../crows';
import { Profile } from '../appData';

const BACKEND = 'https://myportfolio-be-13-11-2022.onrender.com/api';

// nav entries: [section number, label, route]; the routes scroll to the section (see Home_comp)
const LINKS = [
  ['01', 'About', '/about'],
  ['02', 'Skills', '/skill'],
  ['03', 'Work', '/projects'],
  ['04', 'Journey', '/journey'],
  ['05', 'Learning', '/learning'],
  ['06', 'Contact', '/contact']
];

class Header_comp extends React.Component {
  state = { coords: 'x: 0000  y: 0000' };

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    this.recordVisit();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  // CAD-style cursor readout in the corner of the nav
  onMouseMove = (ev) => {
    const x = String(Math.round(ev.pageX)).padStart(4, '0');
    const y = String(Math.round(ev.pageY)).padStart(4, '0');
    this.setState({ coords: 'x: ' + x + '  y: ' + y });
  };

  // Wake the backend and record the visit, in the background. The old site blocked the page with a
  // loading screen while the free Render server woke up; nothing on this page depends on the reply.
  recordVisit() {
    axios.get(BACKEND + '/ping')
      .then((res) => {
        if (res.data === 'pinged') return axios.post(BACKEND + '/traffic/record');
      })
      .catch(() => { /* visit recording is best effort */ });
  }

  render() {
    return (
      <header className="nav">
        <div className="wrap">
          <Link className="mark" to="/" aria-label={Profile.name + ', home'}>
            <Art className="logo" svg={crowLogo()} />
            <span>{Profile.name}</span>
          </Link>
          <nav aria-label="Sections">
            <ul>
              {LINKS.map(([no, label, to]) => (
                <li key={to}><Link to={to}><span>{no}</span>{label}</Link></li>
              ))}
            </ul>
          </nav>
          <span className="coords" aria-hidden="true">{this.state.coords}</span>
        </div>
      </header>
    );
  }
}

export default Header_comp;
