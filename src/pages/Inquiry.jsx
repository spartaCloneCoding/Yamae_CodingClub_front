import React from "react";
import styled from "styled-components"
import inquiryImg from "../src_assets/inquiryImg.png"

const Inquiry = () => {
  return (
    <StContainer>
    <StloginLayout>
      <StImgDiv>
        <img src = {inquiryImg} alt="이미지를 불러 올 수 없네여"/>
      </StImgDiv>

    </StloginLayout>
  </StContainer>
  )
}

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StloginLayout = styled.div`
  width: 486px;
  height: 650px;
  /* border: 1px solid black; */
  border-radius: 20px;
  box-shadow: 0 4px 32px rgb(0 0 0 / 12%);
  padding: 64px;
  display: flex;
  flex-flow: column;
`;


const StImgDiv = styled.div`
  width: 78px;
  height: 122.84px;
  margin: 0 auto;
  margin-bottom: 24px;
`;


export default Inquiry;