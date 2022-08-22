import React from "react";
import styled from "styled-components";

const BottomBox = () => {
  return (
    <BottomBoxStyle>
      <h5>스파르타 코딩클럽 </h5>
      <h5>백엔드 프론트 앤드 클론코딩!</h5>
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

  h5 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
  }
`;

export default BottomBox;
