import React, {Component} from "react";
import {connect} from "react-redux";
import {Col, Row, Container} from "reactstrap";
import {dataSelector} from "../modules/app";
import PerfectScrollbar from "react-perfect-scrollbar";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Music extends Component {
  render() {
    const {data} = this.props;
    return (
      <section id="music">
        <PerfectScrollbar speed={0.8} className="scroll-area" horizontal={false}>
          <Container>
            <h2>music</h2>
            {data.musicItems.map((item, index1) => {
              return (
                <Row className="music-items" key={index1}>
                  <Col md="6">
                    <div className="music-item">
                      <img src={item.img} alt="" />
                      <div className="title">{item.title}</div>
                    </div>
                  </Col>
                  <Col md="6" className="d-none d-md-inline-block">
                    {item.items.map((title, id) => {
                      return (
                        <div className="music-item-titles" key={id}>
                          {title}
                        </div>
                      );
                    })}
                  </Col>
                </Row>
              );
            })}
          </Container>
        </PerfectScrollbar>
      </section>
    );
  }
}
export default enhance(Music);
