import { h } from 'preact';
import { Router } from 'preact-router';

import { mockStore } from './utils/mockStore';
import { getCurrentSnapshot } from './utils/getCurrentSnapshot.js';

import View from '../src/routes/view';
import Desktop from '../src/routes/desktop';
import AboutMe from '../src/routes/aboutMe';
import Projects from '../src/routes/projects';
import Resume from '../src/routes/resume';
import Contact from '../src/routes/contact';

describe('Routing tests', () => {
  test('<Router> is mounted', () => {
    const app = getCurrentSnapshot(<Router />, mockStore);
    expect(app.exists(Router)).toBe(true);
  });

  test('<AboutMe /> is mounted on View.props.page = null and View.props.path="/"', () => {
    const app = getCurrentSnapshot(<View path='/' />, mockStore);
    expect(app.find(View).prop('path')).toBe('/');
    expect(app.exists(AboutMe)).toBe(true);
  });

  test('<Desktop /> is mounted on view path="/desktop"', () => {
    const app = getCurrentSnapshot(<View path='/desktop' page="desktop" />, mockStore);
    expect(app.find(View).prop('path')).toBe('/desktop');
    expect(app.exists(Desktop)).toBe(true);
  });

  test('<AboutMe /> is mounted on view path="/about-me"', () => {
    const app = getCurrentSnapshot(<View path='/about-me' page="aboutMe" />, mockStore);
    expect(app.find(View).prop('path')).toBe('/about-me');
    expect(app.exists(AboutMe)).toBe(true);
  });

  test('<Projects /> is mounted on view path="/projects"', () => {
    const app = getCurrentSnapshot(<View path='/projects' page="projects" />, mockStore);
    expect(app.find(View).prop('path')).toBe('/projects');
    expect(app.exists(Projects)).toBe(true);
  });

  test('<Resume /> is mounted on view path="/resume"', () => {
    const app = getCurrentSnapshot(<View path='/resume' page="resume" />, mockStore);
    expect(app.find(View).prop('path')).toBe('/resume');
    expect(app.exists(Resume)).toBe(true);
  });

  test('<Contact /> is mounted on view path="/contact"', () => {
    const app = getCurrentSnapshot(<View path='/contact' page="contact" />, mockStore);
    expect(app.find(View).prop('path')).toBe('/contact');
    expect(app.exists(Contact)).toBe(true);
  });
});
