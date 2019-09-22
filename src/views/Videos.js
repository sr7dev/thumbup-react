import React, {Component} from "react";
import {connect} from "react-redux";
import { Col, Row, Container} from "reactstrap";
import ReactPlayer from "react-player";
import {dataSelector} from "../modules/app";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Videos extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props;
    return (
      <section id="videos">
        <Container>
          <h2>videos</h2>
          <Row className="video-items d-none d-md-flex">
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
          <Row className="video-items d-xs-flex d-md-none">
            {data.videoItems.map((item, index1) => {
              if (index1 > 1) {
                return null;
              } else {
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
              }
            })}
          </Row>
        </Container>
      </section>
    )
  }
}
export default enhance(Videos);
