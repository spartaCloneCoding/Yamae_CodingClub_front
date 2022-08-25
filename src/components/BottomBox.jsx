import React from "react";
import styled from "styled-components";
import sns_naver from "../src_assets/sns_naver.png"
import sns_tistory from "../src_assets/sns_tistory.png"
import sns_insta from "../src_assets/sns_insta.png"
import sns_youtube from "../src_assets/sns_youtube.png"

const BottomBox = () => {
  return (
    <BottomBoxStyle>
      <StFooterLayout>
        <StFooterTopContainer1>
          <StPtag>스파르타코딩클럽</StPtag>
          <div>
            <p>스파르타 온라인</p>
            <p>항해9</p>
            <p>창</p>
            <p>띵동코딩</p>
            <p>국비지원교육</p>
          </div>
        </StFooterTopContainer1>
        <StFooterTopContainer2>
          <StPtag>ETC</StPtag>
          <div>
            <p>튜터</p>
            <p>채용</p>
            <p>SW사관학교 정글</p>
          </div>
        </StFooterTopContainer2>
        <StFooterTopContainer3>
          <div>
          <img src={sns_naver} alt="" />
          <img src={sns_tistory} alt="" />
          <img src={sns_insta} alt="" />
          <img src={sns_youtube} alt="" />
          </div>
        </StFooterTopContainer3>
      </StFooterLayout>
      <StLine />
      <StFooterLayout2>
        <div className="private">
          <p>개인정보처리방침</p>
          <p>서비스 이용약관</p>
          <p>환불 규정</p>
          <p>자주 묻는 질문</p>
        </div>
        <div>
          <p className="StPP">팀스파르타(주) 사업자 정보</p>
        </div>
      </StFooterLayout2>
    </BottomBoxStyle>
  );
};

const BottomBoxStyle = styled.div`
  width: inherit;
  background: rgb(25, 26, 27);
  padding: 26px 16px 100px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-box-flex: 1;
  flex-grow: 1;
  color: white;

  /* h5 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
  } */
`;

const StFooterLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StFooterTopContainer1 = styled.div`
  display: flex;
  flex-flow: column;

  div {
    display: flex;
    gap: 10px;

   & > p {
    font-size: 14px;
  }
  }

`;

const StPtag = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const StFooterTopContainer2 = styled.div`
  display: flex;
  flex-flow: column;

  div {
    display: flex;
    gap: 10px;

   & > p {
    font-size: 14px;
  }
  }
`;

const StFooterTopContainer3 = styled.div`
  display: flex;
  flex-flow: column;

  & > div {
    display: flex;
    gap: 13px;
  }

  img {
    width: 36px;
    height: 36px;
  }
`;

const StLine = styled.div`
  width: 100%;
  border: 0.5px solid rgb(51, 51, 51);
  margin: 23px 0px;
`;

const StFooterLayout2 = styled.div`
  display: flex;
  flex-flow: column;

  .private {
    display: flex;
    gap: 10px;
    font-size: 14px;
  }

  .StPP {
    font-size: 14px;
    font-weight: 700;
  }
`;

export default BottomBox;
