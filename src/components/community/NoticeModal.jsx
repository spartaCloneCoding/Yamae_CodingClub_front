import React from "react";
import styled from "styled-components";
const NoticeModal = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Container>
        <text
          onClick={() => {
            setShow(true);
          }}
        >
          자유게시판 공지
        </text>

        {show === true ? (
          <>
            <ModalBox>
              <div>자유게시글 공지</div>
              <button
                onClick={() => {
                  setShow(!show);
                }}
              >
                확인했습니다.
              </button>
            </ModalBox>
          </>
        ) : null}
      </Container>
    </>
  );
};

const Container = styled.div`
  text {
    cursor: pointer;
    font-size: 14px;
    color: red;
  }
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 50px;
  position: absolute;

  z-index: 10;
  border-radius: 10px;
  border: 0.3px solid lightgray;
  background: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 100px;
`;
export default NoticeModal;
