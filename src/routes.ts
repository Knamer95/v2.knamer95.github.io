import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

export enum FrontRoutes {
  home = '/',
  about = '/about',
  skills = '/skills',
  projects = '/projects',
  collabs = '/collabs',
  contact = '/contact',
}

const home = {
  component: Home,
  path: FrontRoutes.home,
  exact: true,
};

const about = {
  component: About,
  path: FrontRoutes.about,
  exact: true,
};

const projects = {
  component: Projects,
  path: FrontRoutes.projects,
  exact: true,
};

const contactMe = {
  component: Contact,
  path: FrontRoutes.contact,
  exact: true,
};

const error404 = {
  component: NotFound,
  path: '*',
  exact: true,
};

export const appRoutes = [home, about, projects, contactMe, error404];

