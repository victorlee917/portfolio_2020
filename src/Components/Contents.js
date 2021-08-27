import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-right: 50px;
  height: 100vh;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-y: scroll;
  /* overflow-x: hidden; */
  @media screen and (max-width: 992px) {
    padding-right: 0px;
    width: 100%;
    align-items: center;
    overflow-y: initial;
    height: auto;
  }
`;

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>{this.props.children}</Container>
      </>
    );
  }
}

export default Contents;
