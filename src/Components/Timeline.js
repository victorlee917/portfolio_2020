import React, { Component } from "react";
import styled from "styled-components";

const Box = styled.div`
  min-height: 36px;
  margin-top: 80px;
  width: 500px;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 992px) {
    margin-top: 50px;
    width: 100%;
  }
`;

const Header = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Text = styled.span`
  font-size: 16px;
  opacity: 0.5;
`;

class Timeline extends Component {
  render() {
    return (
      <>
        <Box>
          <Header className="dD">
            <Bar></Bar>
            <Text>Timeline</Text>
          </Header>
        </Box>
      </>
    );
  }
}

export default Timeline;
