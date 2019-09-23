import React, {Component} from "react";
import {Nav, NavItem} from "reactstrap";
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";
import {AppNavbarBrand, AppSidebarToggler} from "@coreui/react";
import navigation from "../../_nav";
import logo from "../../assets/img/brand/logo.svg";
import {connect} from "react-redux";
import {movePage} from "../../modules/actions";

const propTypes = {
  children: PropTypes.node,
  movePage: PropTypes.func.isRequired,
};

const defaultProps = {};

class DefaultHeader extends Component {
  changeTheme() {
    // document.querySelector("body").classList.toggle("white-theme");
    // document
    //   .querySelectorAll(".nav-link")
    //   .forEach(el => el.classList.toggle("white-theme"));
    // document.querySelectorAll(".nav").forEach(el => el.classList.toggle("white-theme"));
    // document.querySelectorAll(".btn").forEach(el => el.classList.toggle("white-theme"));
  }
  toggleMenu(id, index) {
    document.querySelector("body").classList.toggle("sidebar-show");
    this.props.movePage(index);
  }
  render() {
    return (
      <React.Fragment>
        <AppNavbarBrand
          full={{src: logo, width: 185, height: 57, alt: "BISHOPS Logo"}}
          minimized={{src: logo, width: 117, height: 36, alt: "BISHOPS Logo"}}
        />
        <Nav className="header-nav" navbar>
          {navigation.items.map((item, index) => {
            return (
              <NavItem
                data-id={item.url}
                key={index}
              >
                <NavLink className="nav-link" to={item.url} >{item.name}</NavLink>
              </NavItem>
            );
          })}
          {/* <NavItem onClick={this.changeTheme}>
            <i className="fa fa-exchange nav-link"></i>
          </NavItem> */}
        </Nav>

        <AppSidebarToggler className="ml-auto menu-toggler" mobile>
          <i className="fa fa-bars"></i>
        </AppSidebarToggler>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;
const mapStateToProps = state => ({});
export default connect(
  mapStateToProps,
  {movePage}
)(DefaultHeader);
