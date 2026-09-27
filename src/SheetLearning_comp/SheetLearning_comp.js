import './SheetLearning_comp.css';
import React from "react";
import { Art, feather } from '../crows';
import { Education } from '../appData';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

export default class SheetLearning_comp extends React.Component {
  render() {
    return (
      <section id="education">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="05" title="Where I" accent="learned" meta="education & training" />
            <div className="certs">
              {Education.map((x) => (
                <div className="cert rv" key={x.title}>
                  <span className="note">{x.when}</span>
                  <h3>{x.title}</h3>
                  <p>{x.org}</p>
                  {x.note && <span className="stamp"><Art className="ink" svg={feather()} />{x.note}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
