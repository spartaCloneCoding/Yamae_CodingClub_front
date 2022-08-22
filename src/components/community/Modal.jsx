import React from "react";
import axios from "axios";
// import { api } from "../../shared/api";
import styled from "styled-components";
// import {useParams} from "react-router-dom";
const Modal = () => {
  const [show, setShow] = React.useState(false);
  const [posts, setPosts] = React.useState({
    title: "물어볼게 있습니다!",
    content: "항해99를 하고싶은데, 코딩에 코자도 모르는 사람도 가능한가요?",
  });

  const onSubmitHandler = (posts) => {
    axios.post(`http://wetube-phenomenonlee.shop/api/posts`, posts);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    onSubmitHandler(posts);
  };

  return (
    <Container>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        작성하기
      </button>
      {show === true ? (
        <>
          <ModalWrite>
            <h2>자유게시판 작성하기</h2>

            <input
              type="text"
              placeholder="제목을 입력해주세요"
              onChange={(e) => {
                const {value} = e.target;
                setPosts({
                  ...posts,
                  title: value,
                });
              }}
            />
            <input
              className="content"
              placeholder="내용을 입력하세요"
              onChange={(e) => {
                const {value} = e.target;
                setPosts({
                  ...posts,
                  content: value,
                });
              }}
            />
            <button onClick={onClickHandler}>작성 완료</button>
            <button>취소</button>
          </ModalWrite>
          <ModalShadow />
        </>
      ) : null}
    </Container>
  );
};
const Button = styled.button``;

const Container = styled.div``;

const ModalShadow = styled.div`
  content: "";
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalWrite = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  position: absolute;
  border: 1px solid #222;
  z-index: 10;
  border-radius: 10px;
  border: 0.5ps solid lightgray;
  background: #fff;
  left: 50%;
  top: -400%;
  transform: translate(-50%, -50%);
  margin-bottom: 100px;

  input {
    border-radius: 10px;
    border: 0.5px solid lightgray;

    opacity: 0.5;
    width: 600px;
    height: 35px;

    margin-top: 10px;
  }
  .content {
    height: 400px;
  }
`;

export default Modal;
