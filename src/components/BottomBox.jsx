import React from "react";
import styled from "styled-components";

const BottomBox = () => {
  return (
    <BottomBoxStyle>
      <StFooterLayout>
        <StFooterTopContainer1>
          <p>스파르타코딩클럽</p>
          <div>
            <p>스파르타 온라인</p>
            <p>항해9</p>
            <p>창</p>
            <p>띵동코딩</p>
            <p>국비지원교육</p>
            <p>스파르타 온라인</p>
          </div>
        </StFooterTopContainer1>
        <StFooterTopContainer2>
          <p>ETC</p>
        </StFooterTopContainer2>
        <StFooterTopContainer3>
          <p>네이버</p>
          <p>티스토리</p>
          <p>인스타그램</p>
          <p>유튜브</p>
        </StFooterTopContainer3>
      </StFooterLayout>
      <StFooterLayout2>
        <div>
          <p>개인정보처리방침</p>
          <p>서비스 이용약관</p>
          <p>환불 규정</p>
          <p>자주 묻는 질문</p>
        </div>
        <div>
          <p>팀스파르타(주) 사업자 정보</p>
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
  align-items: center;
  -webkit-box-flex: 1;
  flex-grow: 1;

  /* h5 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
  } */
`;

const StFooterLayout = styled.div`
`;

const StFooterTopContainer1 = styled.div`
  
`;

const StFooterTopContainer2 = styled.div`

`;

const StFooterTopContainer3 = styled.div`

`;

const StFooterLayout2 = styled.div`
`;

export default BottomBox;
