import React from "react";
import styled from "styled-components"
import { ReactComponent as Logo } from "../src_assets/logo_chlidren.svg";
import signupImg from "../src_assets/signupImg.png"
import SignUpForm from "../components/login/SignUpForm";

const SignUp = () => {

  return (
    <StContainer>
      <StloginLayout>
        <StLogoDiv>
          <Logo />
        </StLogoDiv>
        <StImgDiv>
          <img src = {signupImg} alt="이미지를 불러 올 수 없네여"/>
        </StImgDiv>
        <StTextDiv>
          <h3>
          반갑습니다!
          </h3>
          <p>완주까지 함께 하는 야매코딩클럽</p>
        </StTextDiv>
        <SignUpForm />
      </StloginLayout>
    </StContainer>  
  )
}

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StloginLayout = styled.div`
  width: 486px;
  height: 980px;
  /* border: 1px solid black; */
  border-radius: 20px;
  box-shadow: 0 4px 32px rgb(0 0 0 / 12%);
  padding: 64px;
  display: flex;
  flex-flow: column;
`;

const StLogoDiv = styled.div`
  margin: 0 auto;
  margin-bottom: 25px;
`;

const StImgDiv = styled.div`
  width: 78px;
  height: 90.25px;
  margin: 0 auto;

  & > img {
    width: 100%;
    height: 100%;
    /* object-fit: fill; */
  }
`;

const StTextDiv = styled.div`
  text-align: center;
  
  & > h3 {
    text-align: center;
    font-size: 25px;
    margin: 0;
    margin-top: 30px;
  }

  & > p {
    margin: 0;
    margin-top: 5px;
    margin-bottom: 30px;
  }
`;

export default SignUp;