import React, { Component } from "react";
import styled from "styled-components";

const RB = styled.div`
  padding: 0px 80px 0px 0px;
  width: 680px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 992px) {
    height: auto;
    padding: 0px 30px 0px 30px;
    width: 100%;
    align-items: center;
  }
  @media screen and (max-width: 479px) {
    padding: 20px 20px 0px 20px;
  }
`;

class RightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <RB> {this.props.children}</RB>
      </>
    );
  }
}

export default RightBox;
