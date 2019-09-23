import React, {Component} from "react";
import {connect} from "react-redux";
import {Label, Input, Button, Col, Row, Container} from "reactstrap";
import {dataSelector} from "../modules/app";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: 'Name', email: 'email@example.com', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()

    const templateId = "template_U9xnORwc";

    this.sendFeedback(
      templateId,
      this.state.email,
      'info@jamfeed.com',
      this.state.message)

    this.setState({
      formSubmitted: true
    })
  }
  sendFeedback (templateId, senderEmail, receiverEmail, message) {
    console.log(senderEmail, receiverEmail, message);
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        from_name: this.state.first_name + " " + this.state.last_name,
        senderEmail,
        receiverEmail,
        message_html: message
      })
      .then(res => {
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  render() {
    return (
      <section id="contact">
        <Container>
          <Row>
            <Col className="pr-2 pr-sm-3">
              <h2>CONTACT</h2>
              <Row>
                <Col className="contact">Booking: mamafestabooking@gmail.com</Col>
              </Row>
              <Row>
                <Col className="contact">Press: zacharytmorgan@gmail.com</Col>
              </Row>
            </Col>
            <Col className="pr-2 pr-sm-3">
              <form onSubmit={this.handleSubmit}>
                <Row>
                  <Col xs="6" className="pr-2 pr-sm-3">
                    <Input type="text" id="first_name" className="email-addr" required 
                      onChange={this.handleChange}
                      name = "first_name"
                    />
                    <Label htmlFor="first_name">First Name *</Label>
                  </Col>
                  <Col xs="6" className="pl-2 pl-sm-3">
                    <Input type="text" id="last_name" className="email-addr" required 
                      onChange={this.handleChange}
                      name = "last_name"
                    />
                    <Label htmlFor="last_name">Last Name *</Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input type="text" id="email" className="email-addr" required
                      onChange={this.handleChange}
                      name = "email"
                    />
                    <Label htmlFor="email">Email *</Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Input type="textarea" id="message" className="email-addr" required 
                      name="message"
                      onChange={this.handleChange}
                    />
                    <Label htmlFor="message">Message *</Label>
                  </Col>
                </Row>
                <div className="text-center mb-60px">
                  <Button color="dark" outline className="btn-pill join-btn">
                    Submit
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
export default enhance(Contact);
