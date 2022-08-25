import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  __signup,
  __checkNickname,
  __checkUsername,
  changeCheckName,
  changeCheckNick,
} from "../../redux/modules/signupSlice";

const SignUpForm = () => {
  const checkUserName = useSelector((state) => state.signup);
  const checkNickName = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [formdata, setFormData] = useState(false);
  const [signData, setSignData] = useState({
    email: "",
    password: "",
    confirmPw: "",
    nickname: "",
  });

  const email = checkUserName;
  const nick = checkNickName;

  const changeInput = (e) => {
    const {value, id} = e.target;
    setSignData({...signData, [id]: value});
    if (id === "email") dispatch(changeCheckName());
    if (id === "nickname") dispatch(changeCheckNick());
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const checkState = await dispatch(__signup(signData));

    if (checkState.payload) {
      navigate("/login");
    }
  };

  const CheckId = () => {
    if (
      signData.email.indexOf(".") !== -1 &&
      signData.email.indexOf("@") !== -1
    ) {
      dispatch(__checkUsername(signData.email));
    } else {
      alert("이메일 형식으로 작성해주세요");
    }
  };

  const CheckNick = () => {
    dispatch(__checkNickname(signData.nickname));
  };

  useEffect(() => {
    if (
      signData.passwordCheck === signData.password &&
      signData.password !== ""
    ) {
      setConfirmPassword(true);
    } else {
      setConfirmPassword(false);
    }
  }, [signData]);

  useEffect(() => {
    if (email && nick && confirmPassword) {
      setFormData(true);
    } else {
      setFormData(false);
    }
  }, [email, nick, confirmPassword]);

  return (
    <StLoginContainer onSubmit={submitLogin}>
      <label>이메일</label>
      <input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        required
        onChange={changeInput}
      />
      <button className="checkbtn" onClick={CheckId}>
        중복확인
      </button>
      <label>비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="4자 이상, 숫자와 영문자 조합"
        required
        onChange={changeInput}
      />
      <label>비밀번호 확인</label>
      <input
        id="confirmPw"
        type="password"
        placeholder="4자 이상, 숫자와 영문자 조합"
        required
        onChange={changeInput}
      />
      <label>닉네임</label>

      <input
        id="nickname"
        placeholder="4자 이상, 숫자와 영문자 조합"
        required
        onChange={changeInput}
      />
      {/* <button className="checkbtn" onClick={(CheckNick)}>중복확인</button> */}
      <button type="submit">가입하기</button>
    </StLoginContainer>
  );
};

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
    margin-top: 20px;
    margin-bottom: 40px;
  }

  & > .checkbtn {
    background-color: black;
  }

  & > input {
    padding: 12px 15px;
    font-size: 14px;
    border: 1px solid darkgray;
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

export default SignUpForm;
