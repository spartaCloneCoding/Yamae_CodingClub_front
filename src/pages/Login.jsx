import React from "react";
import styled from "styled-components"
import { ReactComponent as Logo } from "../src_assets/logo_chlidren.svg";
import loginImg from "../src_assets/loginImg.png"
import LoginForm from "../components/login/LoginForm";

const Login = () => {

  return (
    <StContainer>
      <StloginLayout>
        <StLogoDiv>
          <Logo />
        </StLogoDiv>
        <StImgDiv>
          <img src = {loginImg} alt="이미지를 불러 올 수 없네여"/>
        </StImgDiv>
        <h3>
          코딩의 세계에 <br />
          오신 것을 환영합ㄴ디ㅏ😎
        </h3>
        <LoginForm />
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
  /* height: 650px; */
  /* border: 1px solid black; */
  border-radius: 20px;
  box-shadow: 0 4px 32px rgb(0 0 0 / 12%);
  padding: 64px;
  display: flex;
  flex-flow: column;

  & > h3 {
    text-align: center;
    font-size: 25px;
  }
`;

const StLogoDiv = styled.div`
  margin: 0 auto;
  margin-bottom: 32px;
`;

const StImgDiv = styled.div`
  width: 78px;
  height: 122.84px;
  margin: 0 auto;
  margin-bottom: 24px;
`;


export default Login;