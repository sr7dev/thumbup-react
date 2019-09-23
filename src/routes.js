import React from "react";
// const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Home = React.lazy(() => import("./views/Home"));
const News = React.lazy(() => import("./views/News"));
const Tour = React.lazy(() => import("./views/Tour"));
const Music = React.lazy(() => import("./views/Music"));
const Videos = React.lazy(() => import("./views/Videos"));
const About = React.lazy(() => import("./views/About"));
const Contact = React.lazy(() => import("./views/Contact"));
const Merch = React.lazy(() => import("./views/Merch"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {path: "/", exact: true, name: "Home", component: Home},
  // {path: "/dashboard", name: "Dashboard", component: Dashboard},
  {path: "/home", exact: true, name: "Home1", component: Home},
  {path: "/news", name: "News", component: News},
  {path: "/tour", name: "Tour", component: Tour},
  {path: "/music", name: "Music", component: Music},
  {path: "/videos", name: "Videos", component: Videos},
  {path: "/merch", name: "Merch", component: Merch},
  {path: "/about", name: "About", component: About},
  {path: "/contact", name: "Contact", component: Contact},
];

export default routes;
