import About from './pages/About';
import NotFound from './pages/NotFound';

export enum FrontRoutes {
  home = '/',
  about = '/about',
  skills = '/skills',
  projects = '/projects',
  collabs = '/collabs',
  contact = '/contact',
}

const home = {
  component: About,
  path: FrontRoutes.home,
  exact: true,
};

const about = {
  component: About,
  path: FrontRoutes.about,
  exact: true,
};

const projects = {
  component: About,
  path: FrontRoutes.projects,
  exact: true,
};

const contactMe = {
  component: About,
  path: FrontRoutes.contact,
  exact: true,
};

const error404 = {
  component: NotFound,
  path: '*',
  exact: true,
};

export const appRoutes = [home, about, projects, contactMe, error404];

