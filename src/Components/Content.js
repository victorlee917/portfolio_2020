import React, { Component } from "react";
import styled from "styled-components";
import Site from "Img/Link.png";
import Download from "Img/Download.png";

const Container = styled.div`
  width: 500px;
  height: auto;
  margin-bottom: 20px;
  transition: ease-in-out 0.1s;
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 100vh 100vw rgba(21, 21, 21, 0.75);
    -moz-box-shadow: 0px 0px 100vh 100vw rgba(21, 21, 21, 0.75);
    box-shadow: 0px 0px 100vh 100vw rgba(21, 21, 21, 0.75);
    @media screen and (max-width: 992px) {
      transform: none;
      box-shadow: none;
    }
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const Box = styled.div`
  background-color: rgba(32, 32, 32, 1);
  width: inherit;
  padding: 40px;
  height: inherit;
  display: flex;
  @media screen and (max-width: 992px) {
    padding: 30px;
  }
`;

const Left = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 40px;
  @media screen and (max-width: 992px) {
    margin-left: 30px;
  }
`;

const Category = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 15px;
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 15px;
  line-height: 1.5;
`;

const Date = styled.span`
  font-weight: 200;
  color: rgba(255, 255, 255, 0.3);
`;

const Button = styled.a`
  background-color: rgba(0, 0, 0, 0.7);
  height: 40px;
  width: 40px;
  opacity: 0.3;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const Down = styled.a`
  background-color: rgba(0, 0, 0, 0.7);
  height: 40px;
  width: 40px;
  opacity: 0.3;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-in-out 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
  color: rgba(255, 255, 255, 1);
`;

class Content extends Component {
  render() {
    const { Cate, TT, DSC, DT, Type, Data } = this.props;
    return (
      <>
        <Container className="dD">
          <Box>
            <Left>
              <Category>{Cate}</Category>
              <Title>{TT}</Title>
              <Desc>{DSC}</Desc>
              <Date>{DT}</Date>
            </Left>
            <Right>
              {Type === "Link" ? (
                <Button href={Data} target="_blank">
                  <Icon src={Site}></Icon>
                </Button>
              ) : (
                <Down href={Data} target="_blank" download>
                  <Icon src={Download}></Icon>
                </Down>
              )}
            </Right>
          </Box>
        </Container>
      </>
    );
  }
}

export default Content;
