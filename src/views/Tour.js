import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Col, Row, Container} from "reactstrap";
import {dataSelector} from "../modules/app";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Tour extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props;
    return (        
      <section id="tour">
        <Container>
          <h2>tour</h2>
          {data.tourItems.map((item, index) => {
            return (
              <Row className="tour-item" key={index}>
                <Col xs="3" md="3" className="date">
                  <div className="day">{item.day}</div>
                  <div className="month">{item.month}</div>
                </Col>
                <Col xs="6" md="6" className="get-ticket">
                  <div>
                    <div className="title">{item.title}</div>
                    <div className="content">{item.address}</div>
                  </div>
                </Col>
                <Col xs="3" md="3" className="get-ticket">
                  <Button color="dark" outline className="btn-pill read-more">
                    Get Tickets
                  </Button>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    )
  }
}
export default enhance(Tour);
