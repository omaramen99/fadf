import './Feathers_comp.css';
import React from "react";
import { Art, feather, crowFlying } from '../crows';

// Decorative layer: feathers drifting down over the whole page, and a crow that glides
// across the screen as you scroll. Both sit in fixed layers and ignore the mouse.
export default class Feathers_comp extends React.Component {
  constructor(props) {
    super(props);
    // random positions are picked once, so re-renders don't make the feathers jump
    const count = window.innerWidth < 700 ? 7 : 11;
    this.feathers = Array.from({ length: count }, (_, i) => ({
      left: (i * (100 / count) + Math.random() * (60 / count)) + '%',
      width: (13 + Math.random() * 13) + 'px',
      animationDuration: (16 + Math.random() * 14) + 's',
      animationDelay: (-Math.random() * 30) + 's'
    }));
    this.glider = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
  }

  // Set the transform directly (no setState): this runs on every scroll event.
  // The crow crosses the screen three times over the full page, bobbing on a sine wave.
  onScroll = () => {
    const el = this.glider.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    const span = window.innerWidth + 360;
    const x = -180 + (p * span * 3) % span;
    const y = window.innerHeight * (.22 + .12 * Math.sin(p * Math.PI * 6));
    el.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + (8 * Math.cos(p * Math.PI * 6)) + 'deg)';
  };

  render() {
    return (
      <>
        <div className="feathers" aria-hidden="true">
          {this.feathers.map((style, i) => <Art key={i} className="feather ink" style={style} svg={feather()} />)}
        </div>
        <div className="glider ink" ref={this.glider} aria-hidden="true">
          <Art svg={crowFlying()} />
        </div>
      </>
    );
  }
}
