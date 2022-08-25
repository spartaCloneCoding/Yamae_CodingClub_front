import React from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
// import AddComment from "./AddComment";
import {api} from "../../shared/api";
// import userEvent from "@testing-library/user-event";
const Comment = ({comments}) => {
  const {id} = useParams();
  // const {commentId} = useParams();
  const [comment, setComment] = React.useState([]);
  // 수정
  const [editInput, setEditInput] = React.useState(false);
  const [editComment, setEditComment] = React.useState({
    comment: "",
  });

  // console.log(commentId);
  // GET_COMMENT
  // const GET_COMMENT = async () => {
  //   const res = await api.get(`api/comments/${id}`);
  //   setComment(res.data);
  // };

  // DELELTE_COMMENT
  const Del_COMMENT = (commentId) => {
    api.delete(`api/comments/${commentId}`);
    if (Del_COMMENT == false) {
      return alert("본인만 삭제가능");
    }
  };

  // PATCH_COMMENT
  const EDIT_COMMENT = (commentId, editComment) => {
    api.patch(`api/comments/${commentId}`, editComment);
  };

  // React.useEffect(() => {
  //   GET_COMMENT();
  // }, []);

  // GET_COMMENT();
  console.log("수정님", comments);
  return (
    <Container>
      💬 댓글
      <>
        {editInput !== true ? (
          <ContentBox>
            <CreatAt>{comments.createdAt}</CreatAt>
            <NickName>{comments.User.nickname}</NickName>
            <p>{comments.comment}</p>
            {/* {comment.cmtNum} */}
            <ButtonGroup>
              <button
                type="button"
                onClick={() => {
                  setEditInput(!editInput);
                }}
              >
                ✍🏼
              </button>
              <button
                type="button"
                onClick={() => {
                  Del_COMMENT(comments.id);
                }}
              >
                ❌
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
                placeholder={comment.comment}
              />
              <button
                type="button"
                onClick={() => {
                  EDIT_COMMENT(editComment);
                  setEditInput(!editInput);
                }}
              >
                완료
              </button>
            </div>
          </>
        )}
      </>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px 0 120px;
  border-top: 1px solid #eaebed;
  border-radius: 10px;
  input {
    border: 1px solid lightgray;
    border-radius: 10px;
    opacity: 0.2px;
    width: 890px;
    height: 50px;
    margin-top: 20px;
  }
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
  }
`;
const NickName = styled.div``;
const CreatAt = styled.div``;

export default Comment;

// 데이터를 웹으로 출력중에 에러 Uncaught TypeError: comment.map is not a function 배열확인.
