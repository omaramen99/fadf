import './SheetSkills_comp.css';
import React from "react";
import { Art, feather } from '../crows';
import { SkillGroups, SkillLevels } from '../appData';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

const pad2 = (n) => (n < 10 ? '0' : '') + n;

export default class SheetSkills_comp extends React.Component {
  // 20 blocks per bar; each block is 5%. The blocks fill one after another when the bar scrolls into view.
  renderBar(value) {
    const on = Math.round(value / 5);
    return (
      <div className="bar" role="img" aria-label={value + '%'}>
        {Array.from({ length: 20 }, (_, i) => (
          <i key={i} className={i < on ? 'on' : ''} style={{ transitionDelay: (i * 45) + 'ms' }} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <section id="skills">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="02" title="Skills" accent="— bill of materials" meta={SkillGroups.length + ' groups'} />
            <table className="bom">
              <thead><tr><th>Item</th><th>Group</th><th>Components</th></tr></thead>
              <tbody>
                {SkillGroups.map((g, i) => (
                  <tr key={g.name}>
                    <td>S-{pad2(i + 1)}</td>
                    <td><span className="g"><Art className="ink" svg={feather()} />{g.name}</span></td>
                    <td><ul className="tags">{g.items.map((x) => <li key={x}>{x}</li>)}</ul></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="segs rv">
              {SkillLevels.map((l) => (
                <div className="seg" key={l.name}>
                  <div className="top"><span>{l.name}</span><span>{l.value}%</span></div>
                  {this.renderBar(l.value)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
