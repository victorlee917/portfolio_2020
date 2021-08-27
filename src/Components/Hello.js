import React, { Component } from "react";
import styled from "styled-components";
import Memoji from "Img/Memoji.png";

const Box = styled.div`
  min-height: 80px;
  width: 500px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 992px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

const Comment = styled.div`
  position: relative;
  color: rgba(255, 255, 255 , 0.3);
  width: auto;
  height: auto;
  padding: 20px;
  background-color: black;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 400;

  &:after {
    content: "";
    position: absolute;
    margin-right: -4%;
    right:0;
    border-radius: 5;
    bottom: 13px;
    border-top: solid 15px transparent;
    border-left: solid 15px rgba(0, 0, 0, 1);
    border-bottom: solid 15px transparent;
`;

const MJ = styled.img`
  width: 80px;
  height: 80px;
`;

class Hello extends Component {
  render() {
    return (
      <Box className="dD">
        <Comment>여기까지 내려와주셔서 감사해요!</Comment>
        <MJ src={Memoji}></MJ>
      </Box>
    );
  }
}

export default Hello;
