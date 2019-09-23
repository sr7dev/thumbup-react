import React, {Component} from "react";
import {connect} from "react-redux";
import {dataSelector} from "../modules/app";
import {Container} from "reactstrap";

const mapStateToProps = state => {
  return {
    data: dataSelector(state),
    pageNo: state.move.pageNo,
  };
};

const enhance = connect(mapStateToProps);
class About extends Component {
  render() {
    return (
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
    )
  }
}
export default enhance(About);
