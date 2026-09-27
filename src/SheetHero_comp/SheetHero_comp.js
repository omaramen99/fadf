import './SheetHero_comp.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Art, crowLogo, crowWire, enso } from '../crows';
import { Profile } from '../appData';
import TitleBlock_comp from '../TitleBlock_comp/TitleBlock_comp';
import portrait from '../media/omaramen400.png';

export default class SheetHero_comp extends React.Component {
  state = { typed: '' };

  componentDidMount() {
    // typing line: types each title, pauses, deletes it, moves to the next
    this.ti = 0; this.ci = 0; this.del = false;
    this.type();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  type = () => {
    const t = Profile.titles[this.ti];
    this.ci += this.del ? -1 : 1;
    let wait = this.del ? 28 : 70;
    if (!this.del && this.ci === t.length) { this.del = true; wait = 1800; }
    else if (this.del && this.ci === 0) { this.del = false; this.ti = (this.ti + 1) % Profile.titles.length; wait = 350; }
    this.setState({ typed: t.slice(0, this.ci) });
    this.timer = setTimeout(this.type, wait);
  };

  render() {
    const [first, last] = Profile.name.split(' ');
    return (
      <section className="hero" id="top">
        <div className="wrap">
          <div className="sheet">
            <div className="hero-sheet">
              <div className="hero-left">
                <span className="tag"><span>SHEET A-001</span><span>·</span><span>PORTFOLIO</span></span>
                <div className="portrait-row">
                  <div className="enso">
                    <img className="mono" src={portrait} alt={Profile.name + ", AEC & BIM software developer"} width="400" height="400" />
                    <Art svg={enso(9)} />
                  </div>
                  <span className="note">fig. 01 · the developer<br />{Profile.location}<br />remote · US &amp; EU</span>
                </div>
                <h1>{first} <em>{last}</em></h1>
                <p className="typer" aria-label={Profile.titles.join(', ')}><span aria-hidden="true">{this.state.typed}<i /></span></p>
                <p className="sub">{Profile.heroLine}</p>
                <div className="actions">
                  <Link className="b solid" to="/projects">view_work →</Link>
                  <Link className="b" to="/contact">contact()</Link>
                  <a className="b" href={Profile.resume}>résumé ↓</a>
                </div>
              </div>
              <div className="hero-right">
                <Art className="watermark" svg={crowLogo()} />
                <div className="draw">
                  <span className="dim dim-h">study no. 1 · Corvus cornix · scale 1:1</span>
                  <span className="dim dim-v">h = 1.00 crow</span>
                  <span className="callout c1">beak: sharp</span>
                  <span className="callout c2">drawn in ink</span>
                  <Art svg={crowWire('#111')} />
                </div>
              </div>
            </div>
            <TitleBlock_comp sheet="A-001" />
          </div>
        </div>
      </section>
    );
  }
}
