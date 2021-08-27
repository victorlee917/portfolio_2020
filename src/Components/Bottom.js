import React, { Component } from "react";
import styled from "styled-components";
import InstaBG from "Img/InstaBG.png";
import FacebookBG from "Img/FacebookBG.png";
import BrunchBG from "Img/BrunchBG.png";

const Box = styled.div`
  width: 400px;
  display: flex;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Contacts = styled.div`
  display: flex;
  align-items: center;
`;

const Contact = styled.a`
  background-color: rgba(255, 255, 255, 1);
  height: 40px;
  width: 40px;
  margin-right: 15px;
  opacity: 0.3;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
`;

class Bottom extends Component {
  render() {
    return (
      <>
        <Box>
          <Contacts>
            <Contact href="https://brunch.co.kr/@vicotorlee" target="_blank">
              <Icon src={BrunchBG}></Icon>
            </Contact>
            <Contact href="https://www.instagram.com/jwluoe/" target="_blank">
              <Icon src={InstaBG}></Icon>
            </Contact>
            <Contact
              href="https://www.facebook.com/victorlee917"
              target="_blank"
            >
              <Icon src={FacebookBG}></Icon>
            </Contact>
          </Contacts>
        </Box>
      </>
    );
  }
}

export default Bottom;
