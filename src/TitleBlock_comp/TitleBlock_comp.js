import './TitleBlock_comp.css';
import React from "react";
import { Art, crowLogo } from '../crows';
import { Profile } from '../appData';

// The drawing-sheet title block (logo seal + project / drawn by / medium / date / sheet).
// Used under the hero and as the footer.
export default class TitleBlock_comp extends React.Component {
  render() {
    const cells = [
      ['project', Profile.site],
      ['drawn by', Profile.name],
      ['medium', 'ink on paper'],
      ['date', new Date().getFullYear()],
      ['sheet', this.props.sheet]
    ];
    return (
      <div className="titleblock">
        <div className="tb-seal"><Art svg={crowLogo({ fill: '#fbfaf6', sheen: '#d9d6cc', eye: '#151515' })} /></div>
        {cells.map(([label, value]) => (
          <div key={label}><small>{label}</small>{value}</div>
        ))}
      </div>
    );
  }
}
