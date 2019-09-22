import React, {Component} from "react";
import {connect} from "react-redux";
import {dataSelector} from "../modules/app";
import {Col, Row, Container} from "reactstrap";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Merch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props;
    return (
      <section id="merch">
        <Container>
          <h2>merch</h2>
          <Row className="merch-items d-none d-md-flex">
            {data.merchItems.map((item, index) => {
              return (
                <Col md="4" key={index}>
                  <div className="merch-item">
                    <img src={item.img} alt="" />
                    <div>
                      <div className="title">{item.title}</div>
                      <div className="price">${item.price}</div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row className="merch-items d-flex d-md-none">
            {data.merchItems.map((item, index) => {
              if (index > 1) {
                return null;
              } else {
                return (
                  <Col md="4" key={index}>
                    <div className="merch-item">
                      <img src={item.img} alt="" />
                      <div>
                        <div className="title">{item.title}</div>
                        <div className="price">${item.price}</div>
                      </div>
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
export default enhance(Merch);