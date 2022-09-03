import React, {useEffect} from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../src/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/modules/loginSlice";


const Header = () => {
  const checktoken = useSelector((state) => state);
  const sessionToken = sessionStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [headerStyle, setHeaderStyle] = useState(true);
  const pathName = useLocation().pathname;

  useEffect(() => {
    setHeaderStyle(false);
  }, []);

  const logOut = () => {
    alert("정상 로그아웃 되었습니다.");
    sessionStorage.removeItem("token");
    dispatch(logOutUser());
    navigate("/");
  };


  return (
    <StHeader headerStyle={pathName === "/" ? "sticky" : "static"}>
      <StHeaderContainer>
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
          {sessionToken?           
            <StBtn onClick={() => {
              logOut()            
              }}>
              로그아웃
            </StBtn>
            :
            <StBtn
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </StBtn>
            }

        </StRightContainer>
      </StHeaderContainer>
    </StHeader>
  );
};

const StHeaderContainer = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid black; */
  padding: 12px 18px;
  padding-bottom: 5.5px;
  width: 100%;
  box-sizing: border-box;

  & > div {
    display: flex;
  }
`;

const StHeader = styled.header`
  background-color: white;
  z-index: 100;
  position: ${(props) => props.headerStyle};
  top: 0;
`;
const StLeftContainer = styled.div``;

const StListContainer = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 40px;
  list-style: none;

  & > li {
    cursor: pointer;
    color: black;
    transition: 0.5s;
    font-weight: 500;
    &:hover {
      font-weight: 900;
      color: red;
    }
  }

  & > div {
    cursor: pointer;
    color: black;
    transition: 0.5s;
    font-weight: 500;
    &:hover {
      font-weight: 900;
      color: red;
    }
  }
`;

const StRightContainer = styled.div``;

const StBtn = styled.button`
  width: 100px;
  height: 49px;
  background-color: rgb(232, 52, 78);
  color: white;
  padding: 14px 21px;
  font-size: 14px;
  font-weight: 900;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`;

export default Header;
