import React, {Component} from "react";
import {connect} from "react-redux";
import {socialItems} from "../../constants/mock";
import {Label, Input, Button, Col, Row, Container} from "reactstrap";
import ReactPlayer from "react-player";
import {dataSelector} from "../../modules/app";
import ReactPageScroller from "react-page-scroller";

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
    this.reactPageScroller.goToPage(nextProps.pageNo);
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
      <ReactPageScroller ref={c => (this.reactPageScroller = c)}>
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
        <section id="news">
          <Container>
            <h2>news</h2>
            {data.newsItems.map((item, index) => {
              return (
                <Row className="news-item" key={index}>
                  <Col md="6" sm="12">
                    <img src={item.img} alt="" />
                  </Col>
                  <Col md="6" sm="12" className="text-center">
                    <div className="title">{item.title}</div>
                    <div className="content">{item.content}</div>
                    <div className="read-more">
                      <Button color="dark" outline className="btn-pill read-more">
                        Read More
                      </Button>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>
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
        <section id="music">
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
        </section>
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
        <section id="about">
          <Container>
            <h2>about</h2>
            <div>
              Mamafesta is an original groove-rock outfit that was born in the fall of
              2011 with a broad pallet of sounds and a conscious awareness for the rhythms
              of life. Over the years Mamafesta has channeled their original sound and
              reach out to their audiences through their musicianship and vocal messages
              in and around the Austin, TX music scene.
              <br />
              <br />
              The band consists of five diverse musicians with well-rooted friendships in
              music and in life including Zack Morgan on keyboards and vocals, Lowell
              Carrico on guitar and lead vocals, and Vince Seidl on guitar and vocals. The
              rhythm section consists of Jose Gutierrez, newest member of the band, on
              drums and vocals and Logan Dance on bass and vocals.
            </div>
          </Container>
        </section>
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
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs="6" className="pr-2 pr-sm-3">
                      <Input type="text" id="first_name" className="email-addr" required 
                        onChange={handleChange}
                        name = "first_name"
                      />
                      <Label htmlFor="first_name">First Name *</Label>
                    </Col>
                    <Col xs="6" className="pl-2 pl-sm-3">
                      <Input type="text" id="last_name" className="email-addr" required 
                        onChange={handleChange}
                        name = "last_name"
                      />
                      <Label htmlFor="last_name">Last Name *</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input type="text" id="email" className="email-addr" required
                        onChange={handleChange}
                        name = "email"
                      />
                      <Label htmlFor="email">Email *</Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Input type="textarea" id="message" className="email-addr" required 
                        name="message"
                        onChange={handleChange}
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
      </ReactPageScroller>
    );
  }
}

export default enhance(Dashboard);
