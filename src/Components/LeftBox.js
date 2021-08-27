import React, { Component } from "react";
import styled from "styled-components";

const LB = styled.div`
  padding: 80px 0px 80px 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    height: auto;
    padding: 80px 30px 0px 30px;
    justify-content: flex-start;
  }
  @media screen and (max-width: 479px) {
    padding: 80px 20px 0px 20px;
  }
`;

class LeftBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <LB>{this.props.children}</LB>
      </>
    );
  }
}

export default LeftBox;
