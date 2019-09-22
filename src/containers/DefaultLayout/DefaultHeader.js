import React, {Component} from "react";
import {Nav, NavItem, NavLink} from "reactstrap";
import PropTypes from "prop-types";
import {AppNavbarBrand, AppSidebarToggler} from "@coreui/react";
import {Container} from "reactstrap";
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
  toggleMenu(id, index) {
    document.querySelector("body").classList.toggle("sidebar-show");
    document.querySelectorAll("li.nav-item").forEach(el => el.classList.remove("active"));
    document.querySelector('.nav-item[data-id="' + id + '"]').classList.add("active");
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
                className={index === 0 ? "active" : ""}
                // onClick={() => this.toggleMenu(item.url, index)}

              >
                <NavLink className="nav-link-span" to={item.url} >{item.name}</NavLink>
              </NavItem>
            );
          })}
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
