import React from "react";
// import axios from "axios";
// import { api } from "../shared/api.jsx";

import Modal from "../components/community/Modal.jsx";
import styled from "styled-components";
import Line from "../components/Line";
import BottomBox from "../components/BottomBox";
import CommunityItem from "../components/community/CommunityItem";

const Community = () => {
  //모달 기능을 작동시키기 위한 useState
  // const [show, setShow] = React.useState(false);
  // const [list, setList] = React.useState([]);

  return (
    <div>
      {/* {show === true ? <Modal /> : null} */}
      <Container>
        <NoticeBox>
          <Line text="자유게시판" />
        </NoticeBox>
        <TopBox>
          <h2>
            <p>dfdf</p>
            <p>자유게시판</p>
            <p>추가기능 자유게시판 이용안내 (modal)</p>
          </h2>
          <button></button>
        </TopBox>
        <div>
          <Content>
            <CommunityItem />
          </Content>
          <Footer>
            <FooterBox>
              <p>스파르타</p>

              {/* <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                작성하기
              </button> */}
              <Modal />
            </FooterBox>
          </Footer>
          <BottomBox />
        </div>
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
  padding: 50px 50px 100px 50px;
  background-color: #eaebdd;
`;

const Footer = styled.div`
  background-color: white;
  position: sticky;
  /* max-width: 1300px;
  width: 100%; */
  width: inherit;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
  box-shadow: 0 -4px 20px 0 rgb(0 0 0 / 8%);

  button {
    border-radius: 8px;
    font-size: 16px;
    height: 50px;
    border: none;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: rgb(232, 52, 78);
    width: 150px;
    opacity: 1;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

// const Nick = styled.div`
//   font-size: 14px;
// `;

// const BodyText = styled.div``;

// const CtreatAt = styled.div``;

export default Community;
