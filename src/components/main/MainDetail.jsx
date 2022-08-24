import React from "react";
import styled from "styled-components";
import MainAvi from "../../src_assets/main_m.mp4";
import Laptop from "../../src_assets/img_laptop.png";

const MainDetail = () => {
  return (
    <>
      <StMainLayout>
        <StVideoCover>
          <StVideoGradient>
          </StVideoGradient>
          <StVideo src={MainAvi} muted autoPlay loop />
        </StVideoCover>
        <StTextContainer>
          <header>
            완주까지 함께하는 <br />
            야매코딩클럽 <br />
          </header>
          <button>수업 살펴보기</button>
        </StTextContainer>
      </StMainLayout>
      <StMainLayout2>
        <StLeftContainer>
          <h2>
            코딩, 배우기로 결심했다가 <br />
            <b>작심삼일</b>
            로 끝나셨나요? <br />
          </h2>
          <p>
            온라인 강의 평균 완주율은 5~6%, <br />
            혼자 듣다 중간에 포기하게 되는 게 십상입니다. <br />
          </p>
        </StLeftContainer>
        <StRightContainer>
          <img src={Laptop} alt="" />
        </StRightContainer>
      </StMainLayout2>
    </>
  );
};

const StMainLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  /* z-index: 1000; */
`;

const StVideoCover = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StVideoGradient = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), transparent, rgba(0, 0, 0, 0.7));
    z-index: 90;
`;

const StVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  /* z-index: -1; */
`;

const StTextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  & > header {
    color: white;
    font-size: 64px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 24px;
  }

  & > button {
    width: 194px;
    height: 59px;
    border-radius: 8px;
    border: 1px solid white;
    font-size: 19px;
    font-weight: 900;
    cursor: pointer;
    background-color: transparent;
    color: white;
  }
`;

const StMainLayout2 = styled.div`
  width: 100%;
  height: 462px;
  display: flex;
  overflow: hidden;

  & > .StRightContainer {
  }
`;

const StLeftContainer = styled.div`
  width: 100%;
  background-color: rgb(9, 9, 9);
  color: white;
  font-size: 27px;
  padding: 90px;

  h2 {
    line-height: 1.6;
  }

  b {
    color: rgb(232, 52, 78);
  }

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
  }
`;

const StRightContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  & > img {
    height: 130%;
  }
`;

export default MainDetail;
