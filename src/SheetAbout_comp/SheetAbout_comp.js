import './SheetAbout_comp.css';
import React from "react";
import { Art, crowLogo } from '../crows';
import { Profile, AboutFacts } from '../appData';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

export default class SheetAbout_comp extends React.Component {
  render() {
    return (
      <section id="about">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="01" title="About" accent="the maker" meta="profile.md" />
            <div className="about">
              <div className="rv">
                <p className="big">{Profile.summary}</p>
                <div className="quote">
                  <Art className="seal" svg={crowLogo({ fill: '#fbfaf6', sheen: '#d9d6cc', eye: '#151515' })} />
                  {Profile.quote}
                </div>
              </div>
              <div className="rv">
                <dl className="kv">
                  {AboutFacts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
