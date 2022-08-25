import React from "react";
import Modal from "../components/community/WriteModal.jsx";
import styled from "styled-components";
import CommunityItem from "../components/community/CommunityItem";
import NoticeModal from "../components/community/NoticeModal";

const Community = () => {
  return (
    <div>
      <Container>
        <NoticeBox></NoticeBox>
        <TopBlock>자유게시판</TopBlock>
        <TopBox>
          <h2>
            <p>스파르타 코딩클럽에 오신걸 환영합니다.</p>
            <p>자유게시판</p>
            <NoticeModal />
          </h2>
        </TopBox>
        <div>
          <Content>
            <CommunityItem />
          </Content>
          <Footer>
            <FooterBox>
              <div>
                <p>코딩에 관한 주제라면 누구든 글을 남길 수 있어요!🤣</p>
              </div>
              <Modal />
            </FooterBox>
          </Footer>
        </div>
      </Container>
    </div>
  );
};
const Container = styled.div`
  box-sizing: border-box;
`;

const TopBlock = styled.div`
  border-bottom: 1px solid #f1f1f1;
  color: #505253;
  padding: 0 10px;
  white-space: nowrap;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const NoticeBox = styled.div`
  display: flex;
`;

const TopBox = styled.div`
  background-color: white;
  border: 0px;
  padding: 10px 50px 10px 50px;
  p {
    animation-duration: 3s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const Content = styled.div`
  content: "";
  width: 862px px;
  padding: 50px 50px 100px 50px;
  background-color: #f4f5f6;
`;

const Footer = styled.div`
  background-color: white;
  position: sticky;
  max-width: 1200vw;
  width: 100%;

  width: inherit;
  left: 0;
  right: 0;
  bottom: 0;
  /* height: 6rem; */
  box-shadow: 0 -4px 20px 0 rgb(0 0 0 / 8%);

  button {
    cursor: pointer;
    border-radius: 8px;
    justify-content: center;
    font-size: 16px;

    border: none;
    font-weight: 700;
    color: rgb(255, 255, 255);
    background-color: rgb(232, 52, 78);
    width: 300px;
    height: 80px;
    opacity: 0.9;
  }
`;

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 120px 20px 120px;
  div {
    box-sizing: border-box;
    letter-spacing: normal;
  }
  br {
    /* padding-top: 40px; */
  }
`;

export default Community;
