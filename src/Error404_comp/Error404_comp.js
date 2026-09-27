import './Error404_comp.css';
import React from "react";
import { Link } from 'react-router-dom';
import { Art, crowWire } from '../crows';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

export default class Error404_comp extends React.Component {
  componentDidMount() {
    document.title = 'Sheet not found · Omar Amen';
  }

  render() {
    return (
      <main className="notfound">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="404" title="Sheet" accent="not found" meta={this.props.location.pathname} />
            <div className="nf-body">
              <Art className="nf-crow" svg={crowWire('#111')} />
              <div>
                <p className="nf-big">This crow flew off with the page.</p>
                <p className="note">The link may be old, or the page has moved to a section of the home page.</p>
                <div className="nf-actions"><Link className="b solid" to="/">back_home →</Link><Link className="b" to="/projects">view_work</Link></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
