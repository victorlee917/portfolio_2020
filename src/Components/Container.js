import React, { Component } from "react";
import styled from "styled-components";

const Cont = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
  }
`;

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Cont>{this.props.children}</Cont>
      </>
    );
  }
}

export default Container;
