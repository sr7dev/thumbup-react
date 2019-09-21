import React, {Component, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {Nav, NavItem} from "reactstrap";
import {AppSidebar} from "@coreui/react";

import {AppHeader} from "@coreui/react";
// routes config
import routes from "../../routes";
import {connect} from "react-redux";
import {movePage} from "../../modules/actions";

import navigation from "../../_nav";
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  toggleMenu(id, index) {
    document.querySelector("body").classList.toggle("sidebar-show");
    document.querySelectorAll("li.nav-item").forEach(el => el.classList.remove("active"));
    document.querySelector('.nav-item[data-id="' + id + '"]').classList.add("active");
    this.props.movePage(index);
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
            <Nav>
              {navigation.items.map((item, index) => {
                return (
                  <NavItem
                    data-id={item.url}
                    key={index}
                    className={index === 0 ? "active" : ""}
                    onClick={() => this.toggleMenu(item.url, index)}
                  >
                    <span className="nav-link-span">{item.name}</span>
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
