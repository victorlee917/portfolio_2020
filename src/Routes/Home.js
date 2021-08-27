import React, { Component } from "react";
import Container from "Components/Container";
import LeftBox from "Components/LeftBox";
import RightBox from "Components/RightBox";
import Header from "Components/Header";
import Bottom from "Components/Bottom";
import Timeline from "Components/Timeline";
import Content from "Components/Content";
import Contents from "Components/Contents";
import Hello from "Components/Hello";
import { SDWT, SDWB } from "Components/Shadow";
import Array from "Array.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <SDWT></SDWT>
        <Container>
          <LeftBox>
            <Header></Header>
            <Bottom></Bottom>
          </LeftBox>
          <RightBox>
            <Contents>
              <Timeline></Timeline>
              {Array.map((item, index) => (
                <Content
                  key={index}
                  Cate={item.Category}
                  TT={item.Title}
                  DSC={item.Desc}
                  DT={item.Date}
                  Type={item.Type}
                  Data={item.Data}
                ></Content>
              ))}
              <Hello></Hello>
            </Contents>
          </RightBox>
        </Container>
        <SDWB></SDWB>
      </>
    );
  }
}

export default Home;
