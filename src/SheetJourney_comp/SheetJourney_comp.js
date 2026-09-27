import './SheetJourney_comp.css';
import React from "react";
import { Art, inkDot } from '../crows';
import { Experience } from '../appData';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

// Experience as a drawing's revision history: newest job = highest revision number.
export default class SheetJourney_comp extends React.Component {
  render() {
    return (
      <section id="experience">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="04" title="The journey" accent="— revision history" meta="latest first" />
            <ol className="rev">
              <li className="rev-head" aria-hidden="true"><div>Rev</div><div>Date</div><div>Role</div><div>Changes</div></li>
              {Experience.map((x, i) => (
                <li className="rv" key={x.org + x.when}>
                  <div><span className="dot"><Art svg={inkDot()} /><span>R{Experience.length - i}</span></span></div>
                  <div className="when">{x.when}</div>
                  <div><h3>{x.role}</h3><p className="org">{x.org}</p><p className="where">{x.where}</p></div>
                  <div><ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    );
  }
}
