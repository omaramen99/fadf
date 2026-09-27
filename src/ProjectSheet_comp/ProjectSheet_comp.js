import './ProjectSheet_comp.css';
import React from "react";

const pad2 = (n) => (n < 10 ? '0' : '') + n;

// Project detail overlay. props: project (Data.Projects item), index, total, onClose
export default class ProjectSheet_comp extends React.Component {
  state = { img: 0 };
  closeBtn = React.createRef();
  panel = React.createRef();

  componentDidMount() {
    this.lastFocus = document.activeElement;
    document.documentElement.classList.add('pm-lock');
    document.addEventListener('keydown', this.onKey);
    this.closeBtn.current.focus();
  }

  componentDidUpdate(prev) {
    if (prev.project.id !== this.props.project.id) this.setState({ img: 0 });
  }

  componentWillUnmount() {
    document.documentElement.classList.remove('pm-lock');
    document.removeEventListener('keydown', this.onKey);
    if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus();
  }

  onKey = (ev) => {
    if (ev.key === 'Escape') this.props.onClose();
    // keep Tab inside the dialog
    if (ev.key === 'Tab') {
      const f = this.panel.current.querySelectorAll('button, a[href]');
      const first = f[0], last = f[f.length - 1];
      if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
      else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
    }
  };

  render() {
    const { project: p, index, total, onClose } = this.props;
    return (
      <div className="pm" onClick={(ev) => { if (ev.target === ev.currentTarget) onClose(); }}>
        <article className="pm-panel" role="dialog" aria-modal="true" aria-labelledby="pm-title" ref={this.panel}>
          <button className="pm-close" type="button" aria-label="Close" onClick={onClose} ref={this.closeBtn}>×</button>
          <div className="pm-media">
            <img className="pm-main" src={p.Images[this.state.img]} alt={p.Name + ' screenshot ' + (this.state.img + 1)} />
            <div className="pm-thumbs">
              {p.Images.map((src, i) => (
                <button key={i} type="button" className={'pm-thumb' + (i === this.state.img ? ' on' : '')}
                  aria-label={'Show screenshot ' + (i + 1)} onClick={() => this.setState({ img: i })}>
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>
          <div className="pm-body">
            <p className="pm-no">PRJ-{pad2(index)} / {pad2(total)}</p>
            <h3 className="pm-title" id="pm-title">{p.Name}</h3>
            <p className="pm-short">{p.MinDiscription}</p>
            <p className="pm-desc">{p.Discription}</p>
            <h4>Features</h4>
            <ul className="pm-feat">{p.Features.map((f) => <li key={f}>{f}</li>)}</ul>
            <h4>Tools</h4>
            <ul className="pm-tools">{p.Tools.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="pm-links">
              {p.YoutubeVidId && <a className="b solid" target="_blank" rel="noopener noreferrer" href={'https://www.youtube.com/watch?v=' + p.YoutubeVidId}>watch_video ↗</a>}
              {p.DownloadLink && <a className="b" target="_blank" rel="noopener noreferrer" href={p.DownloadLink}>open_project ↗</a>}
            </div>
          </div>
        </article>
      </div>
    );
  }
}
