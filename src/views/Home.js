import React, {Component} from "react";
import {connect} from "react-redux";
import {socialItems} from "../constants/mock";
import {dataSelector} from "../modules/app";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="home">
        <div className="social-icons">
          {socialItems.map((item, index) => {
            return (
              <a href={item.url} key={index}>
                <img className="social-icon" src={item.img_url} alt="" />
              </a>
            );
          })}
        </div>
        <div className="info">© 2019 Mamafesta Music LLC</div>
      </section>
    )
  }
}
export default enhance(Home);
