import React from "react";
import styled from "styled-components"
import { ReactComponent as Logo } from "../src_assets/logo_chlidren.svg";
import loginImg from "../src_assets/loginImg.png"
import kakao from "../src_assets/kakao.svg"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

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
        <StLoginContainer>
          <button className="kakao">
            <img src = {kakao} alt="이미지를 불러 올 수 없"/>
            &nbsp;카카오로 1초만에 시작 안됨
            </button> 
          <p>이메일로 시작하기</p> 
          <label>이메일</label> 
          <input placeholder="이메일을 입력해주세요"></input>
          <button onClick={() => {
            navigate("/signup");
          }}>다음</button>
          <p className="remember_p">이메일이 기억나지 않아요</p> 
        </StLoginContainer>
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

const StLoginContainer = styled.div`
  display: flex;
  flex-flow: column;

  & > button {
    width: 100%;
    padding: 18px 30px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    background-color: #e8344e;
  }

  & > .kakao {
    background-color: #ffe500;
    color: black;
  }

  & > p {
    text-align: center;
    font-size: 14px;
    margin: 20px;
  }

  & > .remember_p {
    margin-bottom: 30px;
  }

  & > input {
    padding: 12px 15px;
    font-size: 14px;
    border: 1px solid darkgray;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;


export default Login;