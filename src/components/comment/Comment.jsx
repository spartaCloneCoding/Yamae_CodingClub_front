import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
// import AddComment from "./AddComment";
import {api} from "../../shared/api";
// import userEvent from "@testing-library/user-event";
const Comment = ({comments}) => {
  const {postId} = useParams();
  // const {commentId} = useParams();
  // const [comment, setComment] = React.useState([]);
  // 수정
  const [editInput, setEditInput] = React.useState(false);
  const [editComment, setEditComment] = React.useState({
    comment: "",
  });

  // DELELTE_COMMENT
  const commentId = comments.id;
  console.log(commentId);
  const Del_COMMENT = (commentId) => {
    api.delete(`api/comments/${commentId}`).then(() => {
      window.location.reload();
    });
  };

  // PATCH_COMMENT
  const EDIT_COMMENT = (commentId, editComment) => {
    // console.log(commentId, commentId);
    api.patch(`api/comments/${commentId}`, editComment).then(() => {
      window.location.reload();
    });
  };

  return (
    <>
      <Container>
        <>
          {editInput !== true ? (
            <ContentBox>
              <NickNameGroup>
                <NickName>{comments.User.nickname}</NickName>
                <CreatAt>{comments.createdAt}</CreatAt>
              </NickNameGroup>
              <p>{comments.comment}</p>
              {/* {comment.cmtNum} */}
              <ButtonGroup>
                <button
                  type="button"
                  onClick={() => {
                    setEditInput(!editInput);
                  }}
                >
                  수정
                </button>
                <button
                  type="button"
                  onClick={() => {
                    Del_COMMENT(comments.id);
                  }}
                >
                  삭제
                </button>
              </ButtonGroup>
            </ContentBox>
          ) : (
            <>
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    const {value} = e.target;
                    setEditComment({
                      ...editComment,
                      comment: value,
                    });
                  }}
                  placeholder={comments.comment}
                />
                <ComButton
                  type="button"
                  onClick={() => {
                    EDIT_COMMENT(commentId);
                    setEditInput(!editInput);
                  }}
                >
                  완료
                </ComButton>
              </div>
            </>
          )}
        </>
      </Container>
    </>
  );
};

export default Comment;

const Container = styled.div`
  /* padding: 40px 0 120px;
  border-top: 1px solid #eaebed;
  border-radius: 10px; */
  height: 70px;
  input {
    border: 1px solid lightgray;
    border-radius: 10px;
    opacity: 0.2px;
    width: 720px;
    height: 40px;
    margin-top: 20px;
  }
`;
const NickNameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ContentBox = styled.div`
  display: flex;
  background-color: #f4f5f6;
  border-radius: 5px;
  padding: 10px;
  margin-top: 3px;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    cursor: pointer;
    border: transparent;
    background-color: transparent;
  }
`;
const NickName = styled.div``;
const CreatAt = styled.small`
  font-size: 7px;
`;

const ComButton = styled.button`
  height: 45px;
  width: 50px;
  cursor: pointer;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  background-color: transparent;
`;
// console.log(commentId);

// React.useEffect(() => {
//   GET_COMMENT();
// }, []);

// 데이터를 웹으로 출력중에 에러 Uncaught TypeError: comment.map is not a function 배열확인.

// // GET_COMMENT;
// const GET_COMMENT = async () => {
//   const res = await api.get(`api/comments/${postId}`);
//   console.log(comments);
//   console.log(res.data);
//   setComment(res.data);
// };

// React.useEffect(() => {
//   GET_COMMENT();
// }, []);
