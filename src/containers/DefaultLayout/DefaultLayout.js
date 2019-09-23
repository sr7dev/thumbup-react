import React, {Component, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {Nav, NavItem} from "reactstrap";
import { NavLink } from 'react-router-dom';
import {AppSidebar} from "@coreui/react";

import {AppHeader} from "@coreui/react";
// routes config
import routes from "../../routes";
import {connect} from "react-redux";
import {movePage} from "../../modules/actions";

import navigation from "../../_nav";
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);

  }
  toggleMenu() {
    document.querySelector("body").classList.toggle("sidebar-show");
  }
  render() {
    const loading = () => (
      <div className="animated fadeIn pt-1 text-center">Loading...</div>
    );
    return (
      <div className="app">
        <AppHeader fixed className="mobile-menu">
          <Suspense fallback={loading()}>
            <DefaultHeader />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar className="d-lg-none">
            <Nav className="header-nav" navbar>
              {navigation.items.map((item, index) => {
                return (
                  <NavItem
                    data-id={item.url}
                    key={index}
                    onClick={this.toggleMenu}
                  >
                    <NavLink className="nav-link" to={item.url} >{item.name}</NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </AppSidebar>
          <main className="main">
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {movePage}
)(DefaultLayout);
