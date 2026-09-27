import './SheetContact_comp.css';
import React from "react";
import axios from 'axios';
import { Art, crowWire } from '../crows';
import { Profile, Social } from '../appData';
import SectionHead_comp from '../SectionHead_comp/SectionHead_comp';

const SENDMAIL = 'https://myportfolio-be-13-11-2022.onrender.com/api/sendmail';
const EMPTY = { name: '', email: '', subject: '', message: '' };

export default class SheetContact_comp extends React.Component {
  state = { ...EMPTY, status: 'idle' }; // idle | sending | sent | error

  onChange = (ev) => this.setState({ [ev.target.name]: ev.target.value });

  onSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.status === 'sending') return;
    const { name, email, subject, message } = this.state;
    this.setState({ status: 'sending' });
    // Same request the old site sent: a POST with the fields in the query string
    // (the backend reads name, mail, subject, message). Values are now URL-encoded,
    // so messages containing & or # arrive intact.
    const q = 'name=' + encodeURIComponent(name) + '&mail=' + encodeURIComponent(email) +
      '&subject=' + encodeURIComponent(subject) + '&message=' + encodeURIComponent(message);
    axios.post(SENDMAIL + '?' + q)
      .then(() => this.setState({ ...EMPTY, status: 'sent' }))
      .catch(() => this.setState({ status: 'error' }));
  };

  renderStatus() {
    switch (this.state.status) {
      case 'sending': return '> sending… (the server may need a few seconds to wake up)';
      case 'sent': return '> sent. Thank you, I’ll get back to you soon.';
      case 'error': return '> could not send. Please email ' + Profile.email + ' directly.';
      default: return '';
    }
  }

  render() {
    const { name, email, subject, message, status } = this.state;
    return (
      <section id="contact">
        <div className="wrap">
          <div className="sheet">
            <SectionHead_comp no="06" title="Say" accent="hello" meta="open for projects" />
            <div className="contact">
              <div>
                <Art className="perched rv" svg={crowWire('#111')} />
                <p className="big">Let’s draft<br /><em>your next tool.</em></p>
                <a className="mail" href={'mailto:' + Profile.email}>{Profile.email}</a>
                <ul className="links">
                  <li><a href={Profile.phoneHref}><span>phone</span><span>{Profile.phone}</span></a></li>
                  {Social.map((s) => (
                    <li key={s.name}><a href={s.url} target="_blank" rel="noopener noreferrer"><span>{s.name.toLowerCase()}</span><span>↗</span></a></li>
                  ))}
                  <li><a href={Profile.resume}><span>résumé</span><span>↓</span></a></li>
                </ul>
              </div>
              <form className="term" onSubmit={this.onSubmit}>
                <p className="cmd">$ send_message --to {Profile.email}</p>
                <div className="row">
                  <label>--name<input name="name" value={name} onChange={this.onChange} required autoComplete="name" /></label>
                  <label>--email<input name="email" type="email" value={email} onChange={this.onChange} required autoComplete="email" /></label>
                </div>
                <label>--subject<input name="subject" value={subject} onChange={this.onChange} required /></label>
                <label>--message<textarea name="message" value={message} onChange={this.onChange} required /></label>
                <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'running…' : 'run ↵'}</button>
                <p className={'form-note ' + status} role="status">{this.renderStatus()}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
