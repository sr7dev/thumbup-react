import React, {Component} from "react";
import {connect} from "react-redux";
import {Col, Row, Container} from "reactstrap";
import ReactPlayer from "react-player";
import {dataSelector} from "../modules/app";
import PerfectScrollbar from "react-perfect-scrollbar";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Videos extends Component {
  render() {
    const {data} = this.props;
    return (
      <section id="videos">
        <PerfectScrollbar speed={0.8} className="scroll-area" horizontal={false}>
          <Container>
            <h2>videos</h2>
            <Row className="video-items">
              {data.videoItems.map((item, index1) => {
                return (
                  <Col md="6" key={index1}>
                    <div className="video-item">
                      <div className="player-wrapper">
                        <ReactPlayer
                          url={item.url}
                          width="100%"
                          height="100%"
                          className="react-player"
                        ></ReactPlayer>
                      </div>
                      <div className="title">{item.title}</div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </PerfectScrollbar>
      </section>
    );
  }
}
export default enhance(Videos);
