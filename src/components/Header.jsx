import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../src/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeader>
      <div>
        <StLeftContainer
          onClick={() => {
            navigate("/");
          }}
        >
          <Logo />
        </StLeftContainer>
        <StListContainer>
          <div>수업탐색</div>
          <li
            onClick={() => {
              navigate("/inquiry");
            }}
          >
            문의하기
          </li>
          <li>수강생 후기</li>
          <li>블로그</li>
          <li
            onClick={() => {
              navigate("/community");
            }}
          >
            커뮤니티
          </li>
          <li>기업교육</li>
        </StListContainer>
      </div>
      <StRightContainer>
        <StBtn
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </StBtn>
      </StRightContainer>
    </StHeader>
  );
};

const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  padding: 10px;
  padding-bottom: 5.5px;
  background-color: darkgray;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;

  & > div {
    display: flex;
  }
`;
const StLeftContainer = styled.div``;

const StListContainer = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 40px;
  list-style: none;

  & > li {
    cursor: pointer;
    color: white;
    transition: 0.5s;
    &:hover {
      font-weight: 900;
      color: red;
    }
  }

  & > div {
    cursor: pointer;
    color: white;
    &:hover {
      font-weight: 900;
      color: red;
    }
  }
`;

const StRightContainer = styled.div``;

const StBtn = styled.button`
  width: 78.4px;
  height: 49px;
  background-color: rgb(232, 52, 78);
  color: white;
  padding: 14px 21px;
  font-size: 14px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

export default Header;
