import React, { Component } from "react";
import styled from "styled-components";

const ShadowTop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 30px;
  background: rgb(21, 21, 21);
  background: -moz-linear-gradient(
    180deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(21, 21, 21, 0) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(21, 21, 21, 0) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(21, 21, 21, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#151515",endColorstr="#ffffff",GradientType=1);
`;

const ShadowBottom = styled.div`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 30px;
  background: rgb(21, 21, 21);
  background: -moz-linear-gradient(
    0deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(21, 21, 21, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(21, 21, 21, 0) 100%
  );
  background: linear-gradient(
    0deg,
    rgba(21, 21, 21, 1) 0%,
    rgba(21, 21, 21, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#151515",endColorstr="#ffffff",GradientType=1);
`;

class SDWT extends Component {
  render() {
    return (
      <>
        <ShadowTop></ShadowTop>
      </>
    );
  }
}

class SDWB extends Component {
  render() {
    return (
      <>
        <ShadowBottom></ShadowBottom>
      </>
    );
  }
}

export { SDWT, SDWB };
