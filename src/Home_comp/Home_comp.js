import React from "react";
import { Data, Profile } from '../appData';
import SheetHero_comp from '../SheetHero_comp/SheetHero_comp';
import SheetAbout_comp from '../SheetAbout_comp/SheetAbout_comp';
import SheetSkills_comp from '../SheetSkills_comp/SheetSkills_comp';
import SheetWork_comp from '../SheetWork_comp/SheetWork_comp';
import SheetJourney_comp from '../SheetJourney_comp/SheetJourney_comp';
import SheetLearning_comp from '../SheetLearning_comp/SheetLearning_comp';
import SheetContact_comp from '../SheetContact_comp/SheetContact_comp';
import ProjectSheet_comp from '../ProjectSheet_comp/ProjectSheet_comp';

// Old and nav URLs -> section id. They all render this one page and scroll to the section.
const SECTION_BY_PATH = {
  '/about': 'about',
  '/skill': 'skills',
  '/projects': 'work',
  '/journey': 'experience',
  '/learning': 'education',
  '/contact': 'contact'
};
const BASE_TITLE = Profile.name + ' · ' + Profile.role;

export default class Home_comp extends React.Component {
  state = { projectId: null };
  projects = Data.Projects.filter((p) => p.IsActive);

  componentDidMount() {
    this.observeReveals();
    this.followRoute(null);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) this.followRoute(prevProps.location);
  }

  componentWillUnmount() {
    if (this.io) this.io.disconnect();
    document.title = BASE_TITLE;
  }

  // Sync the page with the URL: /portfolio/:id opens a project, section URLs scroll to that section.
  followRoute(prev) {
    const { pathname } = this.props.location;
    const id = this.props.match.params.id;
    const project = id && this.projects.find((p) => p.id === id);
    this.setState({ projectId: project ? project.id : null });
    document.title = project ? project.Name + ' · ' + Profile.name : BASE_TITLE;
    if (project) return;

    // Closing a project (or pressing Back out of one) should leave the page where it was.
    const leavingProject = prev && prev.pathname.startsWith('/portfolio/');
    if (leavingProject) return;
    const section = SECTION_BY_PATH[pathname];
    if (section) {
      // wait a frame so the section exists and has its final position
      requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: prev ? 'smooth' : 'auto' });
      });
    } else if (prev) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  openProject = (id) => {
    this.returnTo = this.props.location.pathname.startsWith('/portfolio/') ? '/' : this.props.location.pathname;
    this.props.history.push('/portfolio/' + id);
  };

  closeProject = () => {
    // replace (not push) so Back doesn't reopen the project; followRoute keeps the scroll position
    this.props.history.replace(this.returnTo || '/');
  };

  // Fade blocks in as they scroll into view (elements with class "rv" get "in").
  observeReveals() {
    const els = document.querySelectorAll('.rv');
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); this.io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => this.io.observe(el));
  }

  render() {
    const project = this.projects.find((p) => p.id === this.state.projectId);
    return (
      <main>
        <SheetHero_comp />
        <SheetAbout_comp />
        <SheetSkills_comp />
        <SheetWork_comp projects={this.projects} featured={Data.TopProjects} onOpen={this.openProject} />
        <SheetJourney_comp />
        <SheetLearning_comp />
        <SheetContact_comp />
        {project && (
          <ProjectSheet_comp
            project={project}
            index={this.projects.indexOf(project) + 1}
            total={this.projects.length}
            onClose={this.closeProject}
          />
        )}
      </main>
    );
  }
}
