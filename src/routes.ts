import About from "./pages/About";

export enum FrontRoutes {
    home = '/',
    about = '/about',
    skills = '/skills',
    projects = '/projects',
    collabs = '/collabs',
    contact = '/contact',
}

const about = {
    component: About,
    path: FrontRoutes.about,
    exact: true,
}