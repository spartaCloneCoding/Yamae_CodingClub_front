import React from "react";
import axios from "axios";
// import { api } from "../../shared/api";
import styled from "styled-components";
const Modal = () => {
  const [show, setShow] = React.useState(false);
  const [showCotent, setShowContent] = React.useState(false);
  const [posts, setPosts] = React.useState({
    title: "",
    content: "",
  });
//__POST_POST
  const onSubmitHandler = (posts) => {
    axios.post("http://54.180.113.36/api/posts", posts)
    // axios.post("http://wetube-phenomenonlee.shop/api/posts", posts);
    .then(()=>{
      setShowContent(!showCotent);
    })
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    onSubmitHandler(posts);
  };

  return (
    <Container>
      <WriteButton
      type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        작성하기
      </WriteButton>
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
            <ButtonGroup>
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                취소
              </button>
              <button onClick={onClickHandler}>작성 완료</button>
            </ButtonGroup>
          </ModalWrite>
          {/* <ModalShadow /> */}
        </>
      ) : null}
    </Container>
  );
};
const WriteButton = styled.button`
  width: 400px;
  height: 70px;
`;

const Container = styled.form``;

// const ModalShadow = styled.div`
//   content: "";
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   width: 100vw;
//   height: 100vh;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   right: 0;

//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 0;
// `;

const ModalWrite = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  position: absolute;
  /* border: 0.3px solid #222; */
  z-index: 10;
  border-radius: 10px;
  border: 0.3px solid lightgray;
  background: #fff;
  left: 50%;
  top: -200%;
  transform: translate(-50%, -50%);
  margin-bottom: 100px;

  input {
    border-radius: 10px;
    border: 0.5px solid lightgray;

    opacity: 0.9;
    width: 600px;
    height: 35px;

    margin-top: 10px;
  }
  .content {
    height: 400px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px;

  button {
    width: 200px;
    margin: 7px;
  }
  /* justify-content: space-between; */
`;

export default Modal;
