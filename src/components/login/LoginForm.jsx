import React, { useState, useEffect } from "react";
import styled from "styled-components";
import kakao from "../../src_assets/kakao.svg"
import { useNavigate } from "react-router-dom";
import { __login } from "../../redux/modules/loginSlice";
import { __checkUsername } from "../../redux/modules/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const LoginForm = () => {
  const checkUserName = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [switches, setSwitches] = useState(false);
  const [switches_pw, setSwitches_pw] = useState(true);
  const [formdata, setFormData] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    const { value, id } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };
  
  const submitLogin = async (e) => {
    e.preventDefault();
    const loginState = await dispatch(__login(loginData));
    console.log(loginState)
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    if (loginState.result) {
      alert(`${loginState.nickname} 님 환영합니다.`);
      navigate("/");
    }
  };

  useEffect(() => {
    if (loginData.email !== "" && loginData.password !== "") {
      setFormData(true);
    } 
    else {
      setFormData(false);
    }
  }, [loginData]);


  const onToggleHandler = () => {
    setSwitches(!switches)
  }

  // const onToggleHandler_pw = () => {
  //   setSwitches_pw(!switches_pw)
  // }
  
  return (
    <StLoginContainer onSubmit={submitLogin}>
    <button className="kakao">
      <img className="kakaoImg" src = {kakao} alt="이미지를 불러 올 수 없"/>
      &nbsp;카카오로 1초만에 시작 안됨
      </button> 
    <p className="btn" onClick={onToggleHandler}>이메일로 시작하기</p> 
    {switches? (    
    <>
      <label>이메일</label> 
      <input 
        id="email"
        type="email" 
        placeholder="이메일을 입력해주세요" 
        required
        onChange={changeInput}
        />
      {switches_pw?(
        <>
        <label>비밀번호</label> 
        <input 
          id="password"
          type="password" 
          placeholder="4자 이상, 숫자와 영문자 조합" 
          required
          onChange={changeInput}
          />
        </>
      ): ""}
      
      <button
        type="submit"
      >
        다음</button>
      {/* <button onClick={onToggleHandler_pw}>ㅋㅋ</button> */}
      <p className="remember_p" onClick={()=>{
        navigate("/signup");
      }}>이메일이 기억나지 않아요</p> 
    </>) : null}
  </StLoginContainer>
  );
}

const StLoginContainer = styled.form`
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

    & > .kakaoImg {
      transform: translate(-2px, 5px)
    }
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

  & > .btn {
    cursor: pointer;
  }

  & > .remember_p {
    margin-bottom: 30px;
    cursor:pointer;
  }

  & > input {
    padding: 12px 15px;
    font-size: 14px;
    border: 1px solid darkgray;
    border-radius: 8px;
    margin-bottom: 20px;
    transition: 0.2s;
    outline: none;

    &:hover {
      border-color: red;
      background-color: #f5f5f5;
    }
  }
`;

export default LoginForm;