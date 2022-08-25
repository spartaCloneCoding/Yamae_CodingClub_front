import React from "react";
import styled from "styled-components";
import {api} from "../../shared/api";
import jwt_decode from "jwt-decode";

const Comment = ({comments}) => {
  const [editInput, setEditInput] = React.useState(false);
  const [editComment, setEditComment] = React.useState({
    comment: "",
  });
  const token = sessionStorage.getItem("token");
  const payload = jwt_decode(token);

  const commentId = comments.id;

  // DELELTE_COMMENT
  const Del_COMMENT = (commentId) => {
    api.delete(`api/comments/${commentId}`).then(() => {
      window.location.reload();
    });
  };

  // PATCH_COMMENT
  const Edit_Comment = (commentId) => {
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
              <CommentStyle>
                <NickNameGroup>
                  <NickName>{comments.User.nickname}</NickName>
                  <CreatAt>{comments.createdAt}</CreatAt>
                </NickNameGroup>
                <p>{comments.comment}</p>
              </CommentStyle>
              {payload.userId === comments.UserId ? (
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
              ) : (
                <ButtonGroup />
              )}
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
                  onClick={(e) => {
                    e.preventDefault();
                    Edit_Comment(commentId);
                    setEditInput(editInput);
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
  height: 70px;
  margin-top: 10px;
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

const CommentStyle = styled.div`
  display: flex;
  justify-content: left;
  position: left;
  p {
    margin-left: 20px;
  }
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
  margin-top: 5px;
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
