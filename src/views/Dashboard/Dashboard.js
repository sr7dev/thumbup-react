import React, {Component} from "react";
import {connect} from "react-redux";
import {Label, Input, Button, Col, Row, Container} from "reactstrap";
import ReactPlayer from "react-player";
import {dataSelector} from "../../modules/app";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);

class Dashboard extends Component { 
  constructor(props) {
    super(props);
    this.state = { first_name: '', last_name: 'Name', email: 'email@example.com', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this.reactPageScroller.goToPage(nextProps.pageNo);
  }
  
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()

    const templateId = "template_id";

    this.sendFeedback(
      templateId,
      this.state.email,
      'j.perfectsolution@outlook.com',
      this.state.message)

    this.setState({
      formSubmitted: true
    })
  }
  sendFeedback (templateId, senderEmail, receiverEmail, message) {
    window.emailjs.send(
      'mailgun',
      templateId,
      {
        senderEmail,
        receiverEmail,
        feedback: message
      })
      .then(res => {
        this.setState({ formEmailSent: true })
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Failed to send feedback. Error: ', err))
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

  render() {
    const {data} = this.props;
    return (
      <div></div>
    );
  }
}

export default enhance(Dashboard);
