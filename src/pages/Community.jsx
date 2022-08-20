import React from "react";
import styled from "styled-components";
import Line from "../components/Line";

const Community = () => {
  return (
    <div>
      <Container>
        <NoticeBox>
          <Line text="자유게시판" />
        </NoticeBox>
        <TopBox>
          <h2>
            <p>스파르타코딩클럽</p>
            <p>자유게시판</p>
          </h2>
          <button onClick={null}></button>
        </TopBox>
        <Content>
          <ContentBox>sdfsfsdf</ContentBox>
        </Content>
        <Footer>sdfsdf</Footer>
      </Container>
    </div>
  );
};
const Container = styled.div`
  box-sizing: border-box;
`;
const NoticeBox = styled.div`
  display: flex;
`;

const TopBox = styled.div`
  background-color: white;
  border: 0px;

  button {
    background-color: whithe;
    border: transparent;
  }
`;

const Content = styled.div`
  content: "";
  /* display: none; */
  width: 862px px;
  background-color: #eaebdd;
`;

const ContentBox = styled.div`
  margin: auto;
  max-width: 957px;
  width: 100%;
  padding: 32px 20px;
  border-top: solid 1px #eaebed;
  border-left: solid 1px #eaebed;
  border-right: solid 1px #eaebed;
  background-color: #fff;
`;
const Footer = styled.div`
  background-color: lightgray;
  max-width: 1230px;
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
`;

export default Community;
