import './SheetWork_comp.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Art, crowWire } from '../crows';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

const pad2 = (n) => (n < 10 ? '0' : '') + n;

// props: projects (active Data.Projects), featured (ids), onOpen(id)
export default class SheetWork_comp extends React.Component {
  // the ink wash on hover spreads from where the cursor entered the card
  onEnter = (ev) => {
    const el = ev.currentTarget, r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
    el.style.setProperty('--my', (ev.clientY - r.top) + 'px');
  };

  open = (ev, id) => {
    // plain clicks open the overlay in place; ctrl/cmd-click still opens /portfolio/:id in a new tab
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
    ev.preventDefault();
    this.props.onOpen(id);
  };

  // e.g. 11 sheets: 3 columns leave 1 empty slot -> ' gap3-1'; 2 columns leave 1 -> ' gap2'
  gapClasses(n) {
    const gap3 = (3 - n % 3) % 3;
    return (gap3 ? ' gap3-' + gap3 : '') + (n % 2 ? ' gap2' : '');
  }

  render() {
    const { projects, featured } = this.props;
    return (
      <section id="work">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="03" title="Things I’ve" accent="built" meta={projects.length + ' sheets · click to open'} />
            <div className="specs">
              {projects.map((p, i) => (
                <a key={p.id} href={'/portfolio/' + p.id} className="spec mono-host rv"
                  onMouseEnter={this.onEnter} onClick={(ev) => this.open(ev, p.id)}>
                  <div className="spec-h"><span>PRJ-{pad2(i + 1)}</span><span>{featured.indexOf(p.id) > -1 ? '★ featured' : 'rev. 1'}</span></div>
                  <div className="spec-img"><img className="mono" src={p.Images[0]} alt={p.Name + ": " + p.MinDiscription} loading="lazy" /></div>
                  <h3>{p.Name}</h3>
                  <p>{p.MinDiscription}</p>
                  <div className="chips">{p.Tools.slice(0, 4).map((t) => <span key={t}>{t}</span>)}</div>
                  <div className="spec-f"><span>{p.Images.length} figs · {p.Features.length} features</span><span>open_sheet →</span></div>
                </a>
              ))}
              {/* Fills the empty slot(s) at the end of the grid. The column count comes from CSS media
                  queries, so we compute the gap for each layout here and let CSS pick the matching class. */}
              {this.gapClasses(projects.length) && (
                <Link className={'spec-more' + this.gapClasses(projects.length)} to="/contact">
                  <Art svg={crowWire('#111')} />
                  <b>More on request</b>
                  <span>contact() →</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
