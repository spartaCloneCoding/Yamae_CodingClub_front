import React from "react";
import styled from "styled-components"
import { ReactComponent as Logo } from "../src_assets/logo_chlidren.svg";
import signupImg from "../src_assets/signupImg.png"
import kakao from "../src_assets/kakao.svg"

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
        <label>이메일</label>
        <input type="text" placeholder="이메일을 입력해주세요." />
        <button>중복확인</button>
        <label>비밀번호</label>
        <input type="text" placeholder="4자 이상, 숫자 영문자 조합"/>
        <label>비밀번호 확인</label>
        <input type="text" placeholder="4자 이상, 숫자 영문자 조합"/>
        <label>닉네임</label>
        <input type="text" placeholder="닉네임"/>
        <button>중복확인</button>
        <button>가입하기</button>
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

const StLogoDiv = styled.div`
  margin: 0 auto;
  margin-bottom: 32px;
`;

const StImgDiv = styled.div`
  width: 78px;
  height: 122.28px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

const StTextDiv = styled.div`
  text-align: center;
  
  & > h3 {
    text-align: center;
    font-size: 25px;
  }
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

export default SignUp;