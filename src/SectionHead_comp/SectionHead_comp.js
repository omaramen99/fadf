import './SectionHead_comp.css';
import React from "react";

// Section header bar: [black number box] Title with an *italic* part [meta note]
// props: no, title, accent (italic part, optional), meta
export default class SectionHead_comp extends React.Component {
  render() {
    const { no, title, accent, meta } = this.props;
    return (
      <div className="sh">
        <span className="no">{no}</span>
        <h2>{title}{accent && <> <em>{accent}</em></>}</h2>
        {meta && <span className="meta">{meta}</span>}
      </div>
    );
  }
}
