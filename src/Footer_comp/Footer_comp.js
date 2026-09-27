import './Footer_comp.css';
import React from "react";
import TitleBlock_comp from '../TitleBlock_comp/TitleBlock_comp';

export default class Footer_comp extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="wrap">
          <div className="sheet"><TitleBlock_comp sheet="A-999 · end" /></div>
        </div>
      </footer>
    );
  }
}
