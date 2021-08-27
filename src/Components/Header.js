import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  /* background-color: rgba(0, 0, 0, 1); */
  width: 400px;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const Titles = styled.div`
  padding-bottom: 15px;
  margin-bottom: 20px;
  @media screen and (max-width: 992px) {
    margin-bottom: 0px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 800;
  display: block;
  padding-bottom: 10px;
`;

const Typing = styled.div`
  max-width: 300px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  font-size: 50px;
  font-weight: 800;
  display: block;
  padding-bottom: 10px;
  animation: animated-text 1s steps(40, end) 1s 1 normal both;
`;

const Border = styled.div`
  border-bottom: solid 3px rgba(249, 212, 110, 1);
  position: absolute;
  right: -7px;
  width: 15px;
  animation: animated-cursor 1s steps(30, end) infinite;
`;

const Desc = styled.span`
  font-size: 50px;
  font-weight: 300;
  line-height: 1.7;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.3);
  display: block;
  padding-bottom: 10px;
`;

const HL = styled.span`
  color: rgba(255, 255, 255, 1);
  /* font-weight: 400; */
`;

const Yellow = styled.span`
  color: rgba(249, 212, 110, 1);
  /* font-weight: 400; */
`;

class Header extends Component {
  render() {
    return (
      <>
        <Box>
          <Titles className="dD">
            <Title>Hello! I'm</Title>
            {/* <Title>Junwoo Lee</Title> */}
            <Typing>
              Junwoo Lee<Border></Border>
            </Typing>
          </Titles>
          <Desc className="dD">
            안녕하세요! 이준우입니다.<br></br>네이버 파이낸셜에서
            <HL> 기획자</HL>로 일하구 있구요.<br></br>글쓰는 거랑 먹는 거
            좋아합니다.<br></br>
            <br></br>
            PS. <Yellow>노란 안경</Yellow>을 자주 씁니다!
          </Desc>
        </Box>
      </>
    );
  }
}

export default Header;
